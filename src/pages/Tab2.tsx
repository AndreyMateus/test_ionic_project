// hooks
import React, { useState } from 'react';

// components
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonTextarea,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonButton
} from '@ionic/react';

// style
import './Tab2.css';

const Tab2: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contato</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList className='list'>
          <IonListHeader>
            <IonLabel className='title-list'>Enviar Mensagem</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonInput label='Nome:' placeholder='Digite seu nome'></IonInput>
          </IonItem>

          <IonItem>
            <IonInput label='Assunto:' placeholder='Digite o assunto'></IonInput>
          </IonItem>

          <IonItem>
            <IonTextarea label="Mensagem" label-placement="floating" rows={6} className='text-area'>
            </IonTextarea >
          </IonItem>

          <IonItem className='btn-send-wrapper'>
            <IonButton color='success' className='btn-send'>Enviar</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage >
  );
};

export default Tab2;
