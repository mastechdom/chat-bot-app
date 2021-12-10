
export class messageHistory {
  text: any;
  sender: string;
  time: any;
  date: any;

  constructor(text: string) {
    this.text = text;
    this.sender = "";
    this.time = "";
    this.date = "";
  }
}
        
export default messageHistory;