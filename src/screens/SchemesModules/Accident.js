import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';
import {Block, Text} from 'galio-framework';
import {_role, phoneRegex} from '../../_const/const';
import {Button, Input} from '../../components';
import {icpaTheme} from '../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import {showTopErrorMessage} from '../../_utils/helper';
import {raiseScheme} from '../../redux/slices/Schemes.js';

const {width, height} = Dimensions.get('screen');

export function Accident({navigation}) {
  const state = useSelector((_state) => _state.dataLogin);

  const [email] = useState(state.profile.email);
  const [contact, setContact] = useState(state.profile.contact);
  const [firstName, setFirstName] = useState(state.profile.firstName);
  const [lastName, setLastName] = useState(state.profile.lastName);
  const [location, setLocation] = useState(state.profile.address || '');
  const [description, setDescription] = useState('');
  const [accidentDate, setAccidentDate] = useState(new Date());
  const [accidentType, setAccidentType] = useState();

  const [base, setBase] = useState('');
  const [employeeNo, setEmployeeNo] = useState('');
  const [ctaText, setCtaText] = useState('Submit');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (ctaText !== 'Submit') {
      return;
    }
    if (firstName === '') {
      showTopErrorMessage('First Name is required', 'danger');
    } else if (lastName === '') {
      showTopErrorMessage('Last Name is required', 'danger');
    } else if (contact === '') {
      showTopErrorMessage('Contact is required', 'danger');
    } else if (!phoneRegex.test(contact)) {
      showTopErrorMessage('contact no is not valid', 'danger');
    } else if (accidentType === '') {
      showTopErrorMessage('Accident Type is required', 'danger');
    } else if (description === '') {
      showTopErrorMessage('Description is required', 'danger');
    } else if (location === '') {
      showTopErrorMessage('Location is required', 'danger');
    } else if (base === '') {
      showTopErrorMessage('Bases is required', 'danger');
    } else if (employeeNo === '') {
      showTopErrorMessage('Employee No is required', 'danger');
    } else {
      setCtaText('Submitting...');

      let token = state.token.jwtToken;
      let obj = {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        email: email || undefined,
        base: base || undefined,
        empNo: employeeNo || undefined,
        docs: [],
        formType: 'acccident',
        accidentDate: accidentDate || undefined,
        accidentType: accidentType || undefined,
        description: description || undefined,
        location: location || undefined,
      };
      dispatch(
        raiseScheme(obj, token, (error, message) => {
          if (error) {
            showTopErrorMessage(message || 'Something went wrong', 'danger');
          } else {
            showTopErrorMessage('Submitted', 'success');
          }
          setCtaText('Submit');
        }),
      );
    }
  };
  return (
    <Block flex center>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <ScrollView
          style={styles.signUpContainer}
          contentContainerStyle={{alignItems: 'center'}}>
          <Block width={width * 0.8}>
            <Input
              borderless
              value={firstName}
              placeholder="First Name"
              onChangeText={(text) => {
                setFirstName(text);
              }}
            />
          </Block>
          <Block width={width * 0.8}>
            <Input
              borderless
              value={lastName}
              placeholder="Last Name"
              onChangeText={(text) => {
                setLastName(text);
              }}
            />
          </Block>
          <Block width={width * 0.8}>
            <Block style={[styles.input, styles.shadow, {marginVertical: 7}]}>
              <Text color={icpaTheme.COLORS.MUTED}>{state.profile.email}</Text>
            </Block>
          </Block>
          <Block width={width * 0.8}>
            <Input
              borderless
              type="numeric"
              value={contact}
              placeholder="Contact"
              onChangeText={(text) => {
                setContact(text);
              }}
            />
          </Block>
          <Block width={width * 0.8}>
            <Input
              borderless
              value={location}
              placeholder="Location"
              onChangeText={(text) => {
                setLocation(text);
              }}
            />
          </Block>
          <Block width={width * 0.8}>
            <Text size={10} style={{marginHorizontal: 5}}>
              Select Accident Date
            </Text>
            <Input
              date
              dateValue={accidentDate}
              onChangeText={(text) => {
                setAccidentDate(text);
              }}
            />
          </Block>
          <Block width={width * 0.8}>
            <Input
              borderless
              value={accidentType}
              placeholder="Accident Type"
              onChangeText={(text) => {
                setAccidentType(text);
              }}
            />
          </Block>
          <Block width={width * 0.8}>
            <Input
              borderless
              value={description}
              placeholder="Description"
              onChangeText={(text) => {
                setDescription(text);
              }}
            />
          </Block>
          <Block width={width * 0.8}>
            <Input
              borderless
              value={base}
              placeholder="Bases"
              onChangeText={(text) => {
                setBase(text);
              }}
            />
          </Block>
          <Block width={width * 0.8}>
            <Input
              borderless
              type="numeric"
              value={employeeNo}
              placeholder="Employee no"
              onChangeText={(text) => {
                setEmployeeNo(text);
              }}
            />
          </Block>
          <Block middle>
            <Button
              color="primary"
              style={styles.createButton}
              onPress={handleSubmit}>
              <Text bold size={14} color={icpaTheme.COLORS.WHITE}>
                {ctaText}
              </Text>
            </Button>
          </Block>
        </ScrollView>
      </KeyboardAvoidingView>
    </Block>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: icpaTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
  },
  socialConnect: {
    backgroundColor: icpaTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#8898AA',
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 250,
  },
  input: {
    borderRadius: 4,
    borderColor: icpaTheme.COLORS.BORDER,
    minHeight: 44,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 10,
  },
  shadow: {
    shadowColor: icpaTheme.COLORS.BLACK,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
  },
  signUpContainer: {
    paddingVertical: 30,
    width: width,
  },
  listStateCity: {
    backgroundColor: '#fff',
    width: width * 0.8,
    height: 500,
    alignSelf: 'center',
    padding: 20,
  },
  listStateCityComponent: {
    padding: 5,
    borderRadius: 4,
    backgroundColor: icpaTheme.COLORS.SWITCH_OFF,
    marginBottom: 2,
  },
  listStateCityComponentActive: {
    padding: 5,
    borderRadius: 4,
    backgroundColor: icpaTheme.COLORS.PRIMARY,
    marginBottom: 2,
  },
});

export default Accident;
