import React, { Component } from 'react';
import './listeleagues.css'

 class ListeLeagues extends Component {

   
    
    state = {
            
        leagues : [
    
        {id:'1',name:'Challenge Cup'},
        {id:'2',name:'Epic League'},
        {id:'3',name:'Fourtune Cup'},
        {id:'4',name:'CEE Champions'},
        {id:'5',name:'6 French League'},
        {id:'6',name:'Iberian Cup'},
        {id:'7',name:'Dust2.us'},
        {id:'8',name:'CDA-FDC'},
        {id:'9',name:'Polish Esport Cup'},
        {id:'10',name:'Polska Liga Esportowa'},
        {id:'11',name:'Fragleaguep'},
        {id:'12',name:'Omen Retake'},
        {id:'13',name:'Bellum Gens Elite'},
        {id:'14',name:'AOC Play Dota2'},
        {id:'15',name:'Moon Studio Mid-Autumn League'},
        {id:'16',name:'Dust2.dk'},
        {id:'17',name:'European Challenger'},
        {id:'18',name:'FiReLEAGUE'},
        {id:'19',name:'VS Gaming Masters'},
        {id:'20',name:'PlayForBelarus'}
    
    ]};

  
   

    render() 
    {
        const voirDetail= ()=> {
              
            console.log('coucou')
    
        }
            
       
    const {leagues}=this.state;

        return (
            <div>
           <h2 className="bd-title">Liste Leagues</h2>
          
           <div class="container">
            <div class="row">
                <div class="col"></div>
                <div class="col">

                {
 leagues.map((league)=> 
               <div className="card">
                   <div className="card-body">
                       <h4 className="card-title"> {league.name}
</h4>
                       <p className="card-text">{league.id}</p>
                       <i className="fa fa-plus" style={{color:'grey', cursor:'pointer', float:'right' }}  onClick={voirDetail}>   Voir Detail </i>
                   </div>
                   </div>
                   
                   )

                }         
                </div>
                <div class="col"></div>
            </div>
        </div>
            
            </div>
        )
    }
}
export default ListeLeagues;