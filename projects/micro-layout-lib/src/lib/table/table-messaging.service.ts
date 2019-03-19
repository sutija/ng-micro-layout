import { Injectable } from '@angular/core';
import {InfoService} from '../services/info.service';
export { Message, Callback, MessageResolver } from '../services/info.service';

@Injectable()
export class TableMessagingService extends InfoService {}
