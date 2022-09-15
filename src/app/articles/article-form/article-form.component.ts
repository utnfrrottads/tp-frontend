import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { IArticle } from 'src/app/entities/article';
import { ICategory } from 'src/app/entities/category';
import { IProvider } from 'src/app/entities/provider';
import { ErrorService } from 'src/app/services/error.service';
import { HttpService } from 'src/app/services/http.service';
import { ImageEncoderService } from 'src/app/services/image-encoder.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  componentMode = '';

  article: IArticle = {} as IArticle;
  categories: ICategory[] = [];
  providers: IProvider[] = [];

  imageBase64 = '';
  providerFormGroup = {
    cuit: [''],
    adress: [''],
    businessName: [''],
    phoneNumber: [''],
  };
  articleForm = this.formBuilder.group({
    code: [''],
    description: [''],
    urlImage: ['assets/images/no_image.png'],
    amountToOrder: [''],
    orderPoint: [''],
    stock: [''],
    price: this.formBuilder.group({
      value: [''],
      sinceDate: [new Date()],
    }),
    category: this.formBuilder.group({
      name: [''],
      description: [''],
    }),
    providers: this.formBuilder.array([
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpService,
    private imageEncoder: ImageEncoderService,
    private route: ActivatedRoute,
    private router: Router,
    private errorService: ErrorService,
    private breadcrum: NgDynamicBreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.componentMode = this.router.url.split('/')[2]; // create / edit

    //  Get all categories to fill combo box
    this.http.getCategories().subscribe({
      next: (res) => this.categories = res,
      error: (err) => console.log(err),
    });

    //  Get all providers to fill combo box
    this.http.getProviders().subscribe({
      next: (res) => this.providers = res,
      error: (err) => console.log(err),
    });

    // Suscribe observable for base64 encode image
    this.imageEncoder.imageObservable$.subscribe({
      next: (image) => {
        this.imageBase64 = image.base64;
        this.articleForm.patchValue({
          urlImage: 'assets/images/' + image.fileName,
        });
      },
    });

    // when editing an existing article, autocomplete fields with current values
    if ( this.componentMode === 'edit') {
      this.route.params.subscribe({
        next: ({ articleId }) => {
          this.http.getArticleById(articleId).subscribe({
            next: (res) => {
              this.article = res;
              this.articleForm.patchValue(this.article);
              this.addProviders(this.article.providers);

              this.breadcrum.updateBreadcrumbLabels({ articleCode: this.article.code });
            },
            error: (err) => {
              this.errorService.setError(err);
              this.router.navigate(['error']);
            },
          });
        },
      });
    }

  }

  save(): void {
    const article: IArticle = this.articleForm.value;
    article.image = this.imageBase64;

    if (this.componentMode === 'create') {
      this.createArticle(article);
    }
    else {
      this.updateArticle(article);
    }
  }

  createArticle(article: IArticle): void {
    this.http.createArticle(article).subscribe({
      next: (res) => {
        alert('Exito!');
        this.articleForm.reset();
      },
      error: (err) => console.log(err),
    });
  }

  updateArticle(article: IArticle): void {
    // Manually add id to article from articleForm to send request
    article._id = this.article._id;

    this.http.updateArticle(article).subscribe({
      next: () => alert('Exito!'),
      error: (err) => console.log(err),
    });
  }

  onImageChanges(e: any): void {
    this.imageEncoder.onImageChanges(e);
  }

  changeCategory(e: any): void {
    this.articleForm.patchValue({ category: this.categories[e.target.value] });
  }

  isSelectedProvider(provider: IProvider): boolean {
    const prov = this.articleForm.value.providers as IProvider[];
    return prov.some(p => p.cuit === provider.cuit);
  }

  getProviders(): FormArray {
    return this.articleForm.get('providers') as FormArray;
  }

  changeProviders(e: any): void {
    const options = [...e.target.selectedOptions];
    const providers = options.map(({ value }) => this.providers[value]);

    this.addProviders(providers);
  }

  addProviders(providers: IProvider[]): void {
    this.getProviders().controls = providers.map(() => this.formBuilder.group(this.providerFormGroup));
    this.articleForm.patchValue({ providers });
  }
}
