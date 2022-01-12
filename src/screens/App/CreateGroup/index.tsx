import React, { useRef, useState } from 'react';
import StepIndicator from 'react-native-step-indicator';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Wizard from 'react-native-wizard';

import { useTheme } from 'styled-components';

import { DateParty } from '#/components/FormCreateGroup/DateParty';
import { DateRaffle } from '#/components/FormCreateGroup/DateRaffle';
import { LocaleAndHourParty } from '#/components/FormCreateGroup/LocaleAndHourParty';
import { NameAndValue } from '#/components/FormCreateGroup/NameAndValue';
import { ReviewAndCreate } from '#/components/FormCreateGroup/ReviewAndCreate';
import Header from '#/components/Header';

import { Container, ContainerSteps, Content } from './styles';

export const CreateGroupScreen = () => {
  const { colors } = useTheme();
  const wizardRef = useRef(null);

  const [currentSteps, setCurrentSteps] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const stepList = [
    {
      content: (
        <NameAndValue
          nextStep={() => wizardRef.current!.next()}
          setCurrentPage={setCurrentPage}
        />
      ),
    },
    {
      content: (
        <DateRaffle
          nextStep={() => wizardRef.current!.next()}
          previousStep={() => wizardRef.current!.prev()}
          setCurrentPage={setCurrentPage}
        />
      ),
    },
    {
      content: (
        <DateParty
          nextStep={() => wizardRef.current!.next()}
          previousStep={() => wizardRef.current!.prev()}
          setCurrentPage={setCurrentPage}
        />
      ),
    },
    {
      content: (
        <LocaleAndHourParty
          nextStep={() => wizardRef.current!.next()}
          previousStep={() => wizardRef.current!.prev()}
          setCurrentPage={setCurrentPage}
        />
      ),
    },
    {
      content: (
        <ReviewAndCreate
          previousStep={() => wizardRef.current!.prev()}
          setCurrentPage={setCurrentPage}
        />
      ),
    },
  ];

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.PRIMARY,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: colors.PRIMARY,
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: colors.PRIMARY,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: colors.PRIMARY,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: colors.PRIMARY,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: colors.PRIMARY,
  };

  const stepIndicatorIconConfig = ({
    position,
    stepStatus,
  }: {
    position: number;
    stepStatus: string;
  }) => {
    const iconConfig = {
      name: 'feed',
      color: stepStatus === 'finished' ? '#ffffff' : colors.PRIMARY,
      size: 15,
    };

    switch (position) {
      case 0: {
        iconConfig.name = 'pencil';
        break;
      }
      case 1: {
        iconConfig.name = 'calendar';
        break;
      }
      case 2: {
        iconConfig.name = 'calendar-check';
        break;
      }
      case 3: {
        iconConfig.name = 'map-marker';
        break;
      }

      default: {
        iconConfig.name = 'check-decagram';
        break;
      }
    }
    return iconConfig;
  };

  const renderStepIndicator = (params: any) => (
    <MaterialIcons {...stepIndicatorIconConfig(params)} />
  );

  return (
    <Container>
      <Header title="CRIAR GRUPO" hasButtonReturn />
      <Content>
        <ContainerSteps>
          <StepIndicator
            currentPosition={currentPage}
            customStyles={customStyles}
            renderStepIndicator={renderStepIndicator}
          />
        </ContainerSteps>

        <Wizard
          ref={wizardRef}
          steps={stepList}
          duration={1000}
          nextStepAnimation="slideDown"
          prevStepAnimation="slideUp"
          onNext={() => {
            console.log('Next Step Called');
          }}
          onPrev={() => {
            console.log('Previous Step Called');
          }}
          currentStep={({ currentStep }) => {
            setCurrentSteps(currentStep);
          }}
        />
      </Content>
    </Container>
  );
};
