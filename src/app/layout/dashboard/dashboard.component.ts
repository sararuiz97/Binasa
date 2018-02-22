import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

declare var $:any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {

        $.ajax({
            url: "https://miguelcbrm.github.io/xml.xml",
            dataType: "xml",
            complete: (result, status) => {
                console.log("Result: ", result);
                var myXML = result.responseXML;
                var x = myXML.getElementsByTagName("Producto");
                var txt = "";
                txt += "<table class='table' border='1'> <thead> <tr> <th scope='col'>ID</th> <th scope='col'>Marca</th> <th scope='col'>Precio</th> <th scope='col'>Existencias</th></tr></thead>";
                var i;
                for(i = 0; i < x.length; i++){

                    if (x[i].getElementsByTagName("Marca")[0].childNodes[0].nodeValue == "FAG"){
                        var y = document.createElement("TR");
                        y.setAttribute("id", i);
            
                        document.getElementById("tablaproductos").appendChild(y);
            
                        var idCol = document.createElement("TD");
                        var setId = document.createTextNode(x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue);
                        idCol.appendChild(setId);
            
                        var marcaCol = document.createElement("TD");
                        var setMarca = document.createTextNode(x[i].getElementsByTagName("Marca")[0].childNodes[0].nodeValue);
                        marcaCol.appendChild(setMarca);
            
                        var precioCol = document.createElement("TD");
                        var setPrecio = document.createTextNode(x[i].getElementsByTagName("Precio")[0].childNodes[0].nodeValue);
                        precioCol.appendChild(setPrecio);

                        var existenciaCol = document.createElement("TD");
                        var setExistencia = document.createTextNode(x[i].getElementsByTagName("Existencia")[0].childNodes[0].nodeValue);
                        existenciaCol.appendChild(setExistencia);
        
            
                        document.getElementById(i).appendChild(idCol);
                        document.getElementById(i).appendChild(marcaCol); 
                        document.getElementById(i).appendChild(precioCol);
                        document.getElementById(i).appendChild(existenciaCol);
                    }

                    /*
                    txt += "<tr><td>" +
                           x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue +
                        "</td><td>" + x[i].getElementsByTagName("Marca")[0].childNodes[0].nodeValue +
                        "</td><td>" + x[i].getElementsByTagName("Precio")[0].childNodes[0].nodeValue + 
                        "</td><td>" + x[i].getElementsByTagName("Existencia")[0].childNodes[0].nodeValue + "</td></tr>";
                    */
                }
                
                //document.getElementById("inventory_xml").innerHTML = txt;	
                console.log("TABLE XML UPDATED");
            },
            error: (jqXHR, status, error) => {
                console.log("jqXHR: ", jqXHR);
                console.log("status: ", status);
                console.log("error: ", error);
            }
        });


    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
