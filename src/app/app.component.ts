import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cookies } from './Shared/Modules/user';
import { CommonModule} from "@angular/common";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'Top 6 Cookies in USA';

  cookieList: Cookies[] = [
    { id: 1, cookiesName: "Oreo", manufacturer: "Mondelez International", address: "905 West Fulton Market, Chicago, IL 60607, USA", phoneNum: "+1 (855) 535-5648", isInStock: false },
    { id: 2, cookiesName: "Pepperidge Farm Cookies", manufacturer: "Campbell Soup Company", address: "595 Westport Ave, Norwalk, CT 06851, USA", phoneNum: "+1 (888) 737-7374", isInStock: false },
    { id: 3, cookiesName: "Famous Amos", manufacturer: "Ferrero Group", address: "7 Sylvan Way, Parsippany, NJ 07054, USA", phoneNum: "+1 (800) 323-0768", isInStock: false },
    { id: 4, cookiesName: "Chips Ahoy!", manufacturer: "Mondelez International", address: "905 West Fulton Market, Chicago, IL 60607, USA", phoneNum: "+1 (855) 535-5648", isInStock: false },
    { id: 5, cookiesName: "Tates Bake Shop Cookies", manufacturer: "Tate's Bake Shop (owned by Mondelez International)", address: "43 North Sea Road, Southampton, NY 11968, USA", phoneNum: "+1 (631) 257-5830", isInStock: false },
    { id: 6, cookiesName: "Lotus Biscoff", manufacturer: "Lotus Bakeries", address: "167 West 74th Street, New York, NY 10023, USA", phoneNum: "+1 (631) 257-5830", isInStock: false }
  ];

  // Function that toggles the in-stock status of a cookie
  toggleInStockStatus(user: Cookies): void {
    user.isInStock = !user.isInStock;
  }
}