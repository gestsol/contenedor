import { Component, OnInit } from '@angular/core';
import {NgModule, Renderer2, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contenedores',
  templateUrl: './contenedores.component.html',
  styleUrls: ['./contenedores.component.css']
})
export class ContenedoresComponent implements OnInit {

	public items = [''];
  
	constructor(private elementRef:ElementRef, private renderer:Renderer2) { }



	 ngOnInit(): void {
	  
	 }
  
	agregar(){
		this.items.push('');

	}

	borrar(index: any){
		 this.items.splice(index, 1);
	}
}

	
