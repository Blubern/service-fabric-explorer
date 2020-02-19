import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartitionRoutingModule } from './partition-routing.module';
import { BaseComponent } from './base/base.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { DetailsComponent } from './details/details.component';
import { EventsComponent } from './events/events.component';
import { BackupsComponent } from './backups/backups.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailListTemplatesModule } from 'src/app/modules/detail-list-templates/detail-list-templates.module';
import { EventStoreModule } from 'src/app/modules/event-store/event-store.module';
import { PartitionEnableBackUpComponent } from 'src/app/modules/backup-restore/partition-enable-back-up/partition-enable-back-up.component';
import { BackupRestoreModule } from 'src/app/modules/backup-restore/backup-restore.module';
import { PartitionRestoreBackUpComponent } from './partition-restore-back-up/partition-restore-back-up.component';
import { PartitionTriggerBackUpComponent } from './partition-trigger-back-up/partition-trigger-back-up.component';


@NgModule({
  declarations: [BaseComponent, EssentialsComponent, DetailsComponent, EventsComponent, BackupsComponent, PartitionRestoreBackUpComponent, PartitionTriggerBackUpComponent],
  imports: [
    CommonModule,
    PartitionRoutingModule,
    SharedModule,
    DetailListTemplatesModule,
    EventStoreModule,
    BackupRestoreModule
  ],
  entryComponents: [PartitionEnableBackUpComponent]
})
export class PartitionModule { }