import { NgModule } from '@angular/core';
import { CustomcardComponent } from './customcard/customcard';
import { IonicModule } from 'ionic-angular';
import { CustomtinderComponent } from './customtinder/customtinder';
import { CustommenubarComponent } from './custommenubar/custommenubar';
import { EmptychatComponent } from './emptychat/emptychat';
import { MymapComponent } from './mymap/mymap';
import { MatchedComponent } from './matched/matched';
import { ChatitemComponent } from './chatitem/chatitem';
import { FriendsitemComponent } from './friendsitem/friendsitem';
import { GrouponComponent } from './groupon/groupon';
import { YelpComponent } from './yelp/yelp';
import { SearchbarComponent } from './searchbar/searchbar';
import { InviteitemComponent } from './inviteitem/inviteitem';
import { GroupitemComponent } from './groupitem/groupitem';
import { ImagegalleryComponent } from './imagegallery/imagegallery';

@NgModule({
    declarations: 
    [CustomcardComponent,
    CustomtinderComponent,
    CustommenubarComponent,
    EmptychatComponent,
    MymapComponent,
    MatchedComponent,
    ChatitemComponent,
    FriendsitemComponent,
    GrouponComponent,
    YelpComponent,
    SearchbarComponent,
    InviteitemComponent,
    GroupitemComponent,
    ImagegalleryComponent],
	imports: [IonicModule],
    exports: 
    [CustomcardComponent,
    CustomtinderComponent,
    CustommenubarComponent,
    EmptychatComponent,
    MymapComponent,
    MatchedComponent,
    ChatitemComponent,
    FriendsitemComponent,
    GrouponComponent,
    YelpComponent,
    SearchbarComponent,
    InviteitemComponent,
    GroupitemComponent,
    ImagegalleryComponent]
})
export class ComponentsModule {}
