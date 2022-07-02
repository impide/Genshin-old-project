import { ElementRef, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Characters, MondstadtCharacters, LiyueCharacters } from "../data/characters-lists";

@Injectable({ providedIn: 'root' })
export class CharsService {
    transformTranslate: string[] = [];
    selectedChar = new BehaviorSubject<number>(0);

    // Init Chars
    charactersFrom = new BehaviorSubject<Characters[]>(MondstadtCharacters);

    // Animation
    charImage= new BehaviorSubject<string>(this.charactersFrom.value[0].charImage);

    // Direction with Click
    selectChar(charIndex: number, charImage: string, character_lists: ElementRef<HTMLUListElement>) {
        // Animation
        this.charImage.next(charImage);
        // Carousel Slide (Click)
        if (charIndex === 0 || charIndex === 1 || charIndex === 2) {
            character_lists.nativeElement.style.transform = "translateX(" + 0 + "px)";
            this.selectedChar.next(charIndex);
        } else if (charIndex === this.charactersFrom.value.length - 1 || this.charactersFrom.value.length - 2) {
            character_lists.nativeElement.style.transform = "translateX(" + (-142 * (this.charactersFrom.value.length - 6)) + "px)";
            this.selectedChar.next(charIndex);
        } else {
            this.selectedChar.next(charIndex);
            return;
        }

        for (let i = 3; i < this.charactersFrom.value.length - 3; i++) {
            if (i === charIndex) {
                character_lists.nativeElement.style.transform = "translateX(" + (-142 * (i - 2)) + "px)";
                this.selectedChar.next(charIndex);
            }
        }
    }

    directionChar(dir: string, character_lists: ElementRef<HTMLUListElement>) {
        // Carousel Slide (Arrows)
        switch (dir) {
            case 'prev':
                if (this.selectedChar.value === 0) {
                    this.selectedChar.next(this.charactersFrom.value.length - 1);
                    character_lists.nativeElement.style.transform = "translateX(" + (-142 * (this.charactersFrom.value.length - 6)) + "px)";
                } else if (this.selectedChar.value === 3) {
                    this.selectedChar.next(this.selectedChar.value - 1);
                    character_lists.nativeElement.style.transform = "translateX(" + 0 + "px)";
                } else {
                    this.selectedChar.next(this.selectedChar.value - 1);
                    for (let i = 3; i < this.charactersFrom.value.length - 3; i++) {
                        if (i === this.selectedChar.value) {
                            character_lists.nativeElement.style.transform = "translateX(" + (-142 * (i - 2)) + "px)";
                        }
                    }
                }
                break;

            case 'next':
                if (this.selectedChar.value === this.charactersFrom.value.length - 1) {
                    this.selectedChar.next(0);
                    character_lists.nativeElement.style.transform = "translateX(" + 0 + "px)";
                } else {
                    this.selectedChar.next(this.selectedChar.value + 1);
                    for (let i = 3; i < this.charactersFrom.value.length - 3; i++) {
                        if (i === this.selectedChar.value) {
                            character_lists.nativeElement.style.transform = "translateX(" + (-142 * (i - 2)) + "px)";
                        }
                    }
                }
                break;

            default:
                break;
        }

        // Animation
        this.charImage.next(this.charactersFrom.value[this.selectedChar.value].charImage);
    }
}