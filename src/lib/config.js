/**
 * Expected API Response Structure
 * 
 * The backend should return a JSON object with the following structure:
 * 
 * {
 *   "primaryColor": "#00C2E0",           // Main brand color (hex format)
 *   "secondaryColor": "#ffffff",         // Secondary color
 *   "accentColor": "#f87171",           // Accent/error color
 *   "language": "en",                    // Current language code ('en', 'ar', etc.)
 *   "footerText": "Footer content...",   // Footer text in selected language
 *   
 *   "countryCodes": [                    // List of supported country codes
 *     {
 *       "code": "+971",
 *       "country": "UAE",
 *       "flag": "🇦🇪"
 *     },
 *     {
 *       "code": "+966",
 *       "country": "Saudi Arabia",
 *       "flag": "🇸🇦"
 *     },
 *     ... more countries
 *   ],
 *   
 *   "translations": {                    // All UI text in the selected language
 *     "title": "Your file is ready",
 *     "subtitle": "Enter your phone number and confirm the PIN code",
 *     "inputPlaceholder": "Mobile number",
 *     "buttonText": "CONTINUE",
 *     "errorMessage": "Please insert your phone number"
 *   },
 *   
 *   "availableLanguages": [              // Supported languages for toggle
 *     {
 *       "code": "ar",
 *       "label": "AR"
 *     },
 *     {
 *       "code": "en",
 *       "label": "EN"
 *     }
 *   ]
 * }
 */

export const getBackendConfig = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // TODO: Replace with actual API call
  // const response = await fetch('YOUR_API_ENDPOINT/config');
  // return await response.json();

  // Mock data - English version
  return {
    primaryColor: "#00C2E0", 
    secondaryColor: "#ffffff",
    accentColor: "#f87171",
    language: "en", // Change to 'ar' for Arabic
    footerText: "By subscribing to the service, you agree to the following terms and conditions: A standard subscription fee applies. To unsubscribe, send 'STOP' to 1234.",
    
    countryCodes: [
      { code: "+971", country: "UAE", flag: "🇦🇪" },
      { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
      { code: "+965", country: "Kuwait", flag: "🇰🇼" },
      { code: "+973", country: "Bahrain", flag: "🇧🇭" },
      { code: "+974", country: "Qatar", flag: "🇶🇦" },
      { code: "+968", country: "Oman", flag: "🇴🇲" },
      { code: "+20", country: "Egypt", flag: "🇪🇬" },
      { code: "+962", country: "Jordan", flag: "🇯🇴" },
    ],
    
    translations: {
      title: "Your file is ready",
      subtitle: "Enter your phone number and confirm the PIN code",
      inputPlaceholder: "Mobile number",
      buttonText: "CONTINUE",
      errorMessage: "Please insert your phone number"
    },
    
    availableLanguages: [
      { code: "ar", label: "AR" },
      { code: "en", label: "EN" }
    ]
  };
};

// Example Arabic response (when language is 'ar')
export const getBackendConfigArabicExample = {
  primaryColor: "#00C2E0",
  secondaryColor: "#ffffff",
  accentColor: "#f87171",
  language: "ar",
  footerText: "بالاشتراك في الخدمة، فإنك توافق على الشروط والأحكام التالية: تطبق رسوم الاشتراك القياسية. لإلغاء الاشتراك، أرسل 'إيقاف' إلى 1234.",
  
  countryCodes: [
    { code: "+971", country: "الإمارات", flag: "🇦🇪" },
    { code: "+966", country: "السعودية", flag: "🇸🇦" },
    { code: "+965", country: "الكويت", flag: "🇰🇼" },
    { code: "+973", country: "البحرين", flag: "🇧🇭" },
    { code: "+974", country: "قطر", flag: "🇶🇦" },
    { code: "+968", country: "عمان", flag: "🇴🇲" },
    { code: "+20", country: "مصر", flag: "🇪🇬" },
    { code: "+962", country: "الأردن", flag: "🇯🇴" },
  ],
  
  translations: {
    title: "ملفك جاهز",
    subtitle: "أدخل رقم هاتفك وقم بتأكيد رمز PIN",
    inputPlaceholder: "رقم الجوال",
    buttonText: "متابعة",
    errorMessage: "الرجاء إدخال رقم هاتفك"
  },
  
  availableLanguages: [
    { code: "ar", label: "AR" },
    { code: "en", label: "EN" }
  ]
};
