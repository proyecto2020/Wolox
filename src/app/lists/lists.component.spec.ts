import { HttpClientTestingModule } from '@angular/common/http/testing';
import { forwardRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ListsComponent } from './lists.component';
import { PersistenceModule } from 'angular-persistence';
import { FilterPipe } from '../pipes/filter.pipe';
import { createTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('COMPONENTE: ListsComponent', () => {
  let component: ListsComponent;
  let fixture: ComponentFixture<ListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        NgSelectModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
        PersistenceModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
          },
        }),
      ],
      declarations: [ListsComponent, FilterPipe],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => ListsComponent),
        },
      ],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('crear componente', () => {
    /**
     * Creación del Componente.
     *
     */
    it('Creación del Componente.', () => {
      expect(component).toBeTruthy();
    });
  });
  describe('Iniciar listas', () => {
    it('consulta ngOnInit', () => {
      // Arrange.
      let resultadoObtenido: Number;

      // Act.
      spyOn(
        component.generalService,
        'getInformationTechnologies'
      ).and.returnValue(
        of([
          {
            tech: 'Node',
            year: '2009',
            author: 'Ryan Dahl',
            license: 'MIT',
            language: 'JavaScript',
            type: 'Back-End',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png',
          },
        ])
      );
      component.ngOnInit();
      resultadoObtenido = component.lstTecnologias.length;

      // Assert.
      expect(resultadoObtenido).toBeDefined();
    });
  });
});
