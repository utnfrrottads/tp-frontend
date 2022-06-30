import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { IArticle } from 'src/app/entities/article';
import { ICategory } from 'src/app/entities/category';
import { IProvider } from 'src/app/entities/provider';
import { HttpService } from 'src/app/services/http.service';
import { ImageEncoderService } from 'src/app/services/image-encoder.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {

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
    AmountToOrder: [''],
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
  ) { }

  ngOnInit(): void {
    this.http.getCategories().subscribe({
      next: (res) => this.categories = res,
      error: (err) => console.log(err),
    });
    this.http.getProviders().subscribe({
      next: (res) => this.providers = res,
      error: (err) => console.log(err),
    });
    this.imageEncoder.imageObservable$.subscribe({
      next: (image) => {
        this.imageBase64 = image.base64;
        this.articleForm.patchValue({
          urlImage: 'assets/images/' + image.fileName,
        });
      },
    });
  }

  save(): void {
    const article: IArticle = this.articleForm.value;
    article.image = this.imageBase64;

    this.http.createArticle(article).subscribe({
      next: (res) => alert('Exito!'),
      error: (err) => console.log(err),
    });
  }

  onImageChanges(e: any): void {
    this.imageEncoder.onImageChanges(e);
  }

  changeCategory(e: any): void {
    this.articleForm.patchValue({ category: this.categories[e.target.value] });
  }

  getProviders(): FormArray {
    return this.articleForm.get('providers') as FormArray;
  }

  changeProviders(e: any): void {
    const options = [...e.target.selectedOptions];
    const providers = options.map(({ value }) => this.providers[value]);

    this.getProviders().controls = providers.map(() => this.formBuilder.group(this.providerFormGroup));

    this.articleForm.patchValue({ providers });
  }
}
