import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

/* souvent en soumettant un formulaire quelque peut mal tourner et le serveur repondraavec une erreure
 alors pour gerer les erreur , il faut d'aabord intercepter l'erreur du serveur pour cela on utilise rxjs
 avec ca methode CatchError pour catch l'erreur et throwError pour envoyer l'erreur aucomposant */ 

@Injectable({
  providedIn: 'root'
})
export class DataDataToServerService {

  url='http://localhost:3000/enroll';
  constructor(private htpp: HttpClient) { }

  sendData(user : User){
    return this.htpp.post<any>(this.url, user)
            .pipe(catchError(this.errorHandler))
  }
/*la fonction appeller apres avoir catch l'erreur */
  errorHandler(error: HttpErrorResponse ){
    return  throwError(error);
  }
}

/*Ici prends fin la mise en place du template form d'angular
dans cet projet j'ai eu a:
1-Creer Un formualaire angular avec lamethode template
2-Lier(Bind) les données(Data) avec le model(NgModel)
3-Effectuer la validation
4-Founir uretour visuel
5-Afficher les message d'erreur au niveau des input
6-Poster les données du formulaire vers le serveur express ave httpclient.post
7-Recevoir les reponse du serveur express
8-Gerer les erreur du au serveur avec les methode catchError et throwError derxjs*/

