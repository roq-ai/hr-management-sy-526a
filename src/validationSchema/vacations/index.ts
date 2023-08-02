import * as yup from 'yup';

export const vacationValidationSchema = yup.object().shape({
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  employee_id: yup.string().nullable(),
});
