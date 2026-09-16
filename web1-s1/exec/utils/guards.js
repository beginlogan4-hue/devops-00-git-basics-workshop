"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = isNumber;
exports.isString = isString;
exports.isDoctor = isDoctor;
exports.isNiss = isNiss;
exports.isDate = isDate;
// import { Address } from "../models/address.model";
// import { Appointment } from "../models/appointment.model";
// import { MedicalExamDTO } from "../models/medical-exam.model.dto";
// import { Patient } from "../models/patient.model";
/**
 * Function that validates that an input is a number
 * @param data any data
 * @returns true if data is a number
 */
function isNumber(data) {
    return data !== undefined && data !== null && typeof data === 'number' && !isNaN(data);
}
/**
 * Function that validates that an input is a string
 * @param data any data
 * @returns true if data is a string
*/
function isString(data) {
    return data !== undefined && data !== null && typeof data === 'string';
}
/**
 * Function that validates that an input is a valid Doctor model
 * @param data
 * @returns true if data is a valid Doctor model
 */
function isDoctor(data) {
    if (data && typeof data === 'object' &&
        (data.id === undefined || typeof data.id == 'number') &&
        'firstName' in data && 'lastName' in data &&
        'speciality' in data &&
        typeof data.firstName === 'string' &&
        typeof data.lastName === 'string' &&
        typeof data.speciality === 'string') {
        return true;
    }
    return false;
}
/**
 * Function that validates that an input is a valid Patient model
 * @param data
 * @returns true if data is a valid Patient model
 */
/*
export function isPatient(data: unknown): data is Patient {
  if(
    data && typeof data === 'object' &&
    ((data as Patient).id === undefined || typeof (data as Patient).id == 'number') &&
    'firstName' in data && 'lastName' in data &&
    'birthDate' in data && 'niss' in data &&
    'address' in data && 'refDoctor' in data &&
    typeof (data as Patient).firstName === 'string' &&
    ((typeof (data as Patient).birthDate === 'string') || ((data as Patient).birthDate instanceof Date)) &&
    typeof (data as Patient).niss === 'string' &&
    typeof (data as Patient).address === 'object' && isAddress((data as Patient).address) &&
    typeof (data as Patient).refDoctor === 'number'
  ) {
    return true;
  }
  return false;
}
*/
/**
 * Function that validates that an input is a valid Address
 * @param data any data
 * @returns true if data is a valid Address
 */
/*
function isAddress(data: any): data is Address {
  return data && typeof data === 'object' &&
  typeof((data as Address).street) === 'string' && typeof((data as Address).number) === 'string' &&
  typeof((data as Address).zipCode) === 'string' && typeof((data as Address).city) === 'string' &&
  typeof((data as Address).country) === 'string';
}
  */
/**
 * Function that validates that an input is a valid niss
 * A valid niss is a string with the following format: XXXXXX-XXX-XX
 * @param data any data
 * @returns true if data is a valid niss
 */
function isNiss(data) {
    return typeof data === 'string' &&
        data.match(/^\d{6}-\d{3}-\d{2}$/) !== null;
}
function isDate(data) {
    return data != null && data != undefined && (typeof data === 'object') && (data instanceof Date);
}
/*
export function isAppointment(data: unknown): data is Appointment {
  return data != undefined && typeof data === 'object' &&
  ((data as Appointment).id === undefined || typeof (data as Appointment).id == 'number') &&
  // 'date' in data && 'doctor' in data &&
  // 'patient' in data && 'status' in data &&
  (typeof (data as Appointment).dateTime === 'string' || (typeof (data as Appointment).dateTime === 'object') && isDate((data as Appointment).dateTime)) &&
  isNumber((data as Appointment).doctorId) &&
  isNumber((data as Appointment).patientId) &&
  (typeof (data as Appointment).status === 'string');
}
  */
/*
export function isMedicalExamDTO(data: unknown): data is MedicalExamDTO {
  return data != undefined && typeof data === 'object' &&
  ((data as MedicalExamDTO).id === undefined || typeof (data as MedicalExamDTO).id == 'number') &&
  'date' in data && 'type' in data &&
  'patientId' in data && 'refDoctorId' in data &&
  'perfDoctorId' in data && 'appointmentId' in data &&
  'notes' in data && 'status' in data// &&
//   (typeof (data as MedicalExamDTO).date === 'string' || ((typeof (data as MedicalExamDTO).date === 'object') && isDate((data as MedicalExamDTO).date))) &&
//   isNumber((data as MedicalExamDTO).patientId) &&
//   isNumber((data as MedicalExamDTO).refDoctorId) &&
//   isNumber((data as MedicalExamDTO).perfDoctorId) &&
//   isNumber((data as MedicalExamDTO).appointmentId) &&
//   (typeof (data as MedicalExamDTO).type === 'string') &&
//   (typeof (data as MedicalExamDTO).notes === 'string') &&
//   (typeof (data as MedicalExamDTO).status === 'string');
}
*/
