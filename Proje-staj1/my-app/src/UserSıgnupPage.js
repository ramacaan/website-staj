import React from "react";
class UserSıgnupPage extends React.Component {
    state =
    { 
      UserName:null,
      DisplayName:null,
      Password:null,
      PasswordRepeat:null,
      Mail:null,
      agreedClicked:false
       
     };
     onchange = event =>{
        const{name,value} =event.target; 
      //alt 2 satırın görevini yapıyo(name gidiyo ordan value yani değere);
      //   const value = event.target.value;
      //   const name = event.target.name;
        this.setState({
           [name]:value
        })
     }

   //  onchangeUserName = event => {
   // this.setState({
   //  UserName:event.target.value   
   //  });
   // };

   // onchangeDisplayName = event => {
   //    this.setState({
   //     DisplayName:event.target.value   
   //     });
   //    };

   //    onchangePassword = event => {
   //       this.setState({
   //        Password:event.target.value   
   //        });
   //       };

   //       onchangePasswordRepeat = event => {
   //          this.setState({
   //           PasswordRepeat:event.target.value   
   //           });
   //          };

 onChangeAgree = event => 
  {
    this.setState({
       agreedClicked:event.target.checked
    });
   };
 render () 
  {
   document.body.style. backgroundColor = '#FFFFFF';
   
     return ( 
         <form>
         <h1 >   </h1>
         <h1>HOŞGELDİNİZ</h1> 
         <div>
            <a href="https://www.linkedin.com/in/ramazan-g%C3%BCm%C3%BC%C5%9F-106590202/">LİNKLEDİN için tıklayınız..</a>
         </div>
         <div>    
         <a href="https://t.co/dcwkQ98KNt"> İNSTAGRAM için tıklayınız.. </a>        
         </div>
         <div>  
         <a href="https://l.instagram.com/?u=http%3A%2F%2Ftwitter.com%2Framacaan&e=ATMlCkYvD_u2CJpE19k05Y9rDUz4doGUp-EJJcmzo28wQeTsduOJuRS1If5TgF4GKESyWAzO1HPA-M1H&s=1"> TWİTTER için tıklayınız</a>
         </div>
         <div>
            <label > UserName</label>
            <input  name ="UserName" onChange= {this.onchange}
            />
         </div>

         <div>
            <label> Display Name </label> 
            <input name ="DisplayName" onChange= {this.onchange}/>
         </div>
         <div>
            <label> Mail </label>
            <input Mail = "Mail" onchange={this.onchange}/>
         </div>
         <div>
            <label> Password</label>
            <input name ="Password" type="password" onchange={ this.onchange}/>
         </div>
         <div>
            <label>  Password Repeat</label>
            <input name ="PasswordRepeat" type="password" onchange={this.onchange}/>
         </div>
         <input type= "checkbox" onChange={this.onChangeAgree}/> Agreed
         <button disabled= {!this.state.agreedClicked}> SIGN UP </button>
        
         </form>
    );
  }
}
export default UserSıgnupPage; 