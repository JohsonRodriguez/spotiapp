import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('spotify service listo');
  }

getQuery(query:string){
  const url=`https://api.spotify.com/v1/${query}`;
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQCGSA5-SQbvzbWUgydsPlZZpaN84Mb0xzMb-aOS5QQCszAMKRn26TkUj-EBa-GaW9_9EFRQoplW_nYGrxONTqwRNaAE2fR4bib-LfeP5sVVVh-dxXvpKQWBn2zymRRukbIdn5s'
          
  });

  return this.http.get(url,{headers});

}




  getNewReleases(){

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQD4smteRClG-3QGoKBb-ZpKe8j0mnBcLshWbWPmdhbVSyaFlIz6nbCLRV3iXB_01c7gpICgGWMup_hEtITOrxAwo1-G26ly7W_c5p9uc7jnCIKFGApzERR_diimJDC3EcE7714'
            
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
    // .pipe(map(data=>data['albums'].items));

    return this.getQuery('browse/new-releases')
    .pipe(map(data=>data['albums'].items));
    }


    getArtista(termino:string){
      // const headers = new HttpHeaders({
      //   'Authorization': 'Bearer BQD4smteRClG-3QGoKBb-ZpKe8j0mnBcLshWbWPmdhbVSyaFlIz6nbCLRV3iXB_01c7gpICgGWMup_hEtITOrxAwo1-G26ly7W_c5p9uc7jnCIKFGApzERR_diimJDC3EcE7714'
        
      // });
  
      // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
      // .pipe(map(data=> data['artists'].items));
      return this.getQuery( `search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data=> data['artists'].items));

    }
}
