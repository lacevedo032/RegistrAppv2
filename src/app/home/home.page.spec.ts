import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { browser, by, element } from 'protractor';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
export class AppPage {navigateTo() {return browser.get('/');}getPageTitle() {return element(by.css('ion-title')).getText();}}

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { IonicModule } from '@ionic/angular';
// import { HomePage } from './home.page';

// describe('HomePage', () => {
//   let component: HomePage;
//   let fixture: ComponentFixture<HomePage>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [HomePage],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(HomePage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should navigate to root and get page title', () => {
//     // Importante: En una prueba unitaria, no se utiliza directamente Protractor.
//     // La interacción con los elementos de la página se realiza mediante el componente de prueba.

//     // Navegar a la raíz (esto puede depender de la estructura de tu aplicación)
//     const navigateToRoot = () => {
//       // Puedes llamar a métodos o propiedades específicas de tu componente
//       // para simular acciones del usuario o verificar el estado de la aplicación.
//       // En este ejemplo, asumiremos que tu componente tiene un método navigateTo().
//       component.navigateToRoot(); 
//       fixture.detectChanges();
//     };

//     // Obtener el título de la página después de la navegación
//     const getPageTitle = () => {
//       // Similar a la navegación, utiliza las funciones específicas de tu componente.
//       // En este ejemplo, asumimos que tu componente tiene un método getPageTitle().
//       return component.getPageTitle();
//     };

//     // Lógica de la prueba E2E simulada en una prueba unitaria
//     navigateToRoot();
//     const pageTitle = getPageTitle();

//     // Realizar las aserciones pertinentes a tu aplicación
//     expect(pageTitle).toContain('Tab 1');
//   });
// });
