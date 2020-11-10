import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chefed';
  height = '0%';
  navColor = '';
  textColor = '';
  logo1 = '';
  logo2 = '';
  clean:boolean = false;
  meal:boolean = false;
  mealError = '';
  times:boolean = false;
  timesError = '';
  cleanError = '';
  toogleBool:boolean = true;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50) {
      this.navColor = '#fff';
      this.textColor = '#1B1A4F';
      this.logo1 = 'block';
      this.logo2 = 'none';
      this.navBgChange();
      this.logoChange2();
    }
    if (number < 50){
      this.navColor = '#1B1A4F';
      this.logo2 = 'block';
      this.logo1 = 'none';
      this.textColor = '#fff';
    }
  }

  logoChange2(){
    return 'display:' + this.logo2;
  }

  logoChange1(){
    return 'display:' + this.logo1;
  }

  navBgChange(){
    return 'background-color:' + this.navColor + '; color:' + this.textColor;
  }

  navLinksChange(){
    return 'color:' + this.textColor;
  }

  showLinks() {
    return "height :" + this.height + ';' + this.navLinksChange();
  }

  toggleLinks() {
    if (this.height == '400%') {
      this.height = '0%';
    }
    else {
      this.height = '400%';
    }
  }

  mealchecked(e){
    if(e.target.checked == true ){
      this.meal = true;
      this.wait();
      this.mealError = '';
    }
  }

  timesClicked(e){
    if(e.target.checked == true ){
      this.times = true;
      this.timesError = '';
      this.wait();
    }
  }

  cleanClicked(e){
    if(e.target.checked == true ){
      this.clean = true;
      this.cleanError = '';
      this.wait();
    }
  }

  wait(){
    if(this.meal == false){
      this.mealError = " * Please select atleast 1 meal type.";
    }
    else if(this.times == false){
      this.timesError = " * Please select the number of times.";
    }
    else if(this.clean == false){
      this.cleanError = " * Please confirm about utensils cleaning.";
    }
    else if(this.meal == true && this.times == true && this.clean == true){
      this.toogleBool = false;
    }
  }
}

