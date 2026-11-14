import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';
import {
  carSportOutline,
  homeOutline,
  personCircleOutline,
} from 'ionicons/icons';

// Import Pages
import Tap1 from './pages/Tap1';
import Tap2 from './pages/Tap2';
import Tap3 from './pages/Tap3';

// Ionic CSS
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// Custom CSS
import './theme/variables.css';

setupIonicReact({
  mode: 'ios'
});

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route
              path="/tab1"
              element={<Tap1 />}
            />
            <Route
              path="/tab2"
              element={<Tap2 />}
            />
            <Route
              path="/tab3"
              element={<Tap3 />}
            />
            <Route
              path="/"
              element={<Navigate to="/tab1" replace />}
            />
          </IonRouterOutlet>
          <IonTabBar
            slot="bottom"
            className="smart-queue-tab-bar"
          >

            <IonTabButton
              tab="tab1"
              href="/tab1"
            >
              <IonIcon icon={homeOutline} />
              <IonLabel>หน้าหลัก</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="tab2"
              href="/tab2"
            >
              <IonIcon icon={carSportOutline} />
              <IonLabel>การจองของฉัน</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="tab3"
              href="/tab3"
            >
              <IonIcon icon={personCircleOutline} />
              <IonLabel>โปรไฟล์</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
