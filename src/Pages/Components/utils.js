export function convertNumberToText(number) {
    const units = ['', 'UN', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE'];
    const tens = ['', 'DIEZ', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA'];
    const teens = ['', 'ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE', 'DIECISÉIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE'];
    const hundreds = ['', 'CIENTO', 'DOSCIENTOS', 'TRESCIENTOS', 'CUATROCIENTOS', 'QUINIENTOS', 'SEISCIENTOS', 'SETECIENTOS', 'OCHOCIENTOS', 'NOVECIENTOS'];
  
    const numberString = total.toString();
    const parts = numberString.split('.');
    const integerPart = parseInt(parts[0], 10);
    const decimalPart = parseInt(parts[1], 10);
  
    let text = '';
  
    // Convert integer part to text
    if (integerPart === 0) {
      text = 'CERO';
    } else if (integerPart === 1) {
      text = 'UN';
    } else if (integerPart < 100) {
      const unitsDigit = integerPart % 10;
      const tensDigit = Math.floor(integerPart / 10);
  
      if (integerPart < 10) {
        text = units[integerPart];
      } else if (integerPart < 20) {
        text = teens[unitsDigit];
      } else {
        text = tens[tensDigit];
        if (unitsDigit > 0) {
          text += ` Y ${units[unitsDigit]}`;
        }
      }
    } else if (integerPart < 1000) {
      const hundredsDigit = Math.floor(integerPart / 100);
      const remainingDigits = integerPart % 100;
  
      text = hundreds[hundredsDigit];
      if (remainingDigits > 0) {
        text += ` ${convertNumberToText(remainingDigits)}`;
      }
    }
  
    text += ' Y ';
    
    // Convert decimal part to text
    if (decimalPart === 0) {
      text += '00/100';
    } else {
      text += `${decimalPart < 10 ? '0' + decimalPart : decimalPart}/100`;
    }
  
    return `${text} NUEVO SOLES`;
  }
   