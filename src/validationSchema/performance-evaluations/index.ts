import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_date: yup.date().nullable(),
  score: yup.number().integer().nullable(),
  employee_id: yup.string().nullable(),
  team_lead_id: yup.string().nullable(),
});
