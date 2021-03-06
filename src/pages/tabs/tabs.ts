import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  fridgeRoot = 'FridgePage';
  recipesRoot = 'RecipesPage';
  settingsRoot = 'SettingsPage';


  constructor(public navCtrl: NavController) { }

}
