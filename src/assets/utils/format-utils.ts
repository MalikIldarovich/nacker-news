export function formatDate(dateString: string): string {
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      throw new Error("Неверный формат даты");
    }
  
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы от 0 до 11
    const year = date.getFullYear();
    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
  
    return `${day}.${month}.${year} в ${hours}:${minutes}:${seconds}`;
}


export function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
 
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы от 0 до 11
    const year = date.getFullYear();
    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
  
    return `${day}.${month}.${year} в ${hours}:${minutes}:${seconds}`;
}
