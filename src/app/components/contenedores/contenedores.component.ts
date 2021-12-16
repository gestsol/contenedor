import { Component, OnInit } from '@angular/core';
import {NgModule, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contenedores',
  templateUrl: './contenedores.component.html',
  styleUrls: ['./contenedores.component.css']
})
export class ContenedoresComponent implements OnInit {

  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  
	agregar(){
		var numDiv = document.getElementsByClassName("contenedor-item").length;
		
		numDiv++;
		 
		var div: HTMLDivElement = this.renderer.createElement('div');
		div.className = "contenedor-item";
		div.id= "contenedor"+numDiv; 

		div.innerHTML = '<div onclick="borrar('+numDiv+')" class="btnEliminar"></div><input type="text" class="inputSmall" placeholder="text1" /><input type="text" class="inputSmall" placeholder="text2" /><input type="text" class="inputSmall" placeholder="text3" /><br><span>Acción:</span><br><textarea></textarea>';
		console.log(div);
		this.renderer.appendChild(document.getElementById("contenedor-inferior"), div);

	}
	
	
	borrar(numDiv: any){
		alert(numDiv);
	}
}

	
