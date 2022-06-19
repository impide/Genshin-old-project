import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ContestEvents, Events } from "../data/current-events";

@Injectable({ providedIn: 'root' })
export class EventsService {
    contestEvents = new BehaviorSubject<Events[]>(ContestEvents.slice(0,5));

    onShowMoreEvents(): void {
        this.contestEvents.next(ContestEvents.slice(0));
    }
}