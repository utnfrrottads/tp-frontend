import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/entities/category';
import { HttpService } from 'src/app/services/http.service';
import { ImageEncoderService } from 'src/app/services/image-encoder.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {

  modalMsg: any = {};
  imageBase64 = '';

  category: ICategory = {} as ICategory;
  categoryForm = this.formBuilder.group({
    name: [''],
    description: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpService,
    private imageEncoder: ImageEncoderService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({ categoryName }) => {
        this.http.getCategoryByName(categoryName).subscribe({
          next: (res) => {
            this.category = res;
            this.categoryForm.patchValue(this.category);
          },
        });
      },
    });
    this.imageEncoder.imageObservable$.subscribe({
      next: (image) => {
        this.imageBase64 = image.base64;
        this.categoryForm.patchValue({
          urlImage: 'assets/images/' + image.fileName,
        });
      },
    });
  }

  onImageChanges(e: any): void {
    this.imageEncoder.onImageChanges(e);
  }

  save(): void {
    const category = this.categoryForm.value;
    const oldCategoryName = this.category.name;
    this.http.updateCategory(category, oldCategoryName).subscribe({
      next: () => {
        this.modalMsg = {
          title: 'Category updated',
          message: `Category ${category.name} has been updated successfully`,
        };
      },
      error: (err) => {
        this.modalMsg = {
          title: 'Error updating',
          error: err,
          message: `Error when updating category ${category.name}.
          Error: ${err}`,
          date: new Date(),
        };
      },
    });
  }

}
