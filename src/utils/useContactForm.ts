'use client';
import { useState } from 'react';
import { submitToGoogleSheets, storeDataLocally, ContactFormData } from '../utils/googleSheets';

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePhone = (phone: string) =>
  /^[6-9]\d{9}$/.test(phone); // Indian 10-digit mobile number starting from 6-9

export const useContactForm = (sheetName: string, onSuccess?: () => void) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const resetForm = () => {
    setFormData({ name: '', phone: '', email: '', message: '' });
    setStatus('');
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      if (!/^\d*$/.test(value)) return; // Only numbers
    }

    if (name === 'name') {
      if (!/^[A-Za-z\s]*$/.test(value)) return; // Only letters and spaces
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name must contain only letters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Phone must be a valid 10-digit Indian number';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Enter valid email address';
    }

    return newErrors;
  };

  const handleSubmit = async (
    e: React.FormEvent,
    options?: { silent?: boolean }
  ): Promise<boolean> => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }

    setIsSubmitting(true);
    if (!options?.silent) setStatus('');

    const success = await submitToGoogleSheets({ ...formData, sheetName });

    if (success) {
      if (!options?.silent) setStatus('Form submitted successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
      if (onSuccess) onSuccess();
    } else {
      storeDataLocally(formData);
      if (!options?.silent) setStatus('Submission failed. Saved locally.');
    }

    setIsSubmitting(false);
    return success;
  };


  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    status,
    errors,
    resetForm, // 🔁 now exposed
  };
};
