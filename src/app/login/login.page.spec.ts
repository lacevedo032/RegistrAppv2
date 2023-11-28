import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), FormsModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call IniciarSesion method', () => {
    spyOn(component, 'IniciarSesion');
    const button = fixture.debugElement.nativeElement.querySelector('button[color="primary"]');
    button.click();
    expect(component.IniciarSesion).toHaveBeenCalled();
  });

  it('should update user properties on input change', () => {
    const usuarioInput = fixture.debugElement.nativeElement.querySelector('ion-input[ngModel="user.usuario"]');
    const passwordInput = fixture.debugElement.nativeElement.querySelector('ion-input[ngModel="user.password"]');

    usuarioInput.value = 'testuser';
    passwordInput.value = 'testpassword';

    usuarioInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    expect(component.user.usuario).toEqual('testuser');
    expect(component.user.password).toEqual('testpassword');
  });

  it('should navigate to /recuperar-contrasena on Recuperar contraseña button click', () => {
    spyOn(component['router'], 'navigateByUrl');
    const button = fixture.debugElement.nativeElement.querySelector('button[color="warn"]');
    button.click();
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/recuperar-contrasena');
  });
});
