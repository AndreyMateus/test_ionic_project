import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonAvatar } from '@ionic/react';
import { IonItem } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Apresentação</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">A</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* <IonText title='Olá, eu sou Andrey 👋' /> */}
        <IonCard className='card-container'>
          <IonCardHeader>
            <IonCardTitle>Olá, eu sou Andrey 👋</IonCardTitle>
          </IonCardHeader>

          <IonAvatar >
            <img src="https://avatars.githubusercontent.com/u/68996182?v=4" alt="foto de perfil" />
          </IonAvatar>

          <IonCardContent>Desenvolvedor Full Stack apaixonado por entender como a tecnologia funciona por trás dos bastidores.</IonCardContent>
        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;
