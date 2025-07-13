export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  sheetName?: string; // ✅ Optional sheet/tab name
}


// You'll need to replace this URL with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL as string;

export const submitToGoogleSheets = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const dataWithTimestamp = {
      ...formData,
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataWithTimestamp),
    });

    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};



// Fallback function to store data locally if Google Sheets fails
export const storeDataLocally = (formData: ContactFormData) => {
  try {
    const existingData = localStorage.getItem('embraceWindContacts');
    let contacts = [];
    
    if (existingData) {
      contacts = JSON.parse(existingData);
    }
    
    const dataWithTimestamp = {
      ...formData,
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata'
      })
    };
    
    contacts.push(dataWithTimestamp);
    localStorage.setItem('embraceWindContacts', JSON.stringify(contacts));
    return true;
  } catch (error) {
    console.error('Error storing data locally:', error);
    return false;
  }
};