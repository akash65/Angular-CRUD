import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class SearchFilter implements PipeTransform {

    transform(item: any[], searchText: string) {
        // searchText = searchText.toLowerCase();
        return item.filter((result) => {
            console.log(result);
            return result.name === searchText;
        });
    }
}
