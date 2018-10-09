import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

	messages : any = [];

  constructor() { }

  ngOnInit() {}
sendMessage(message_content){
		this.messages.push(message_content.value);
		}

};
