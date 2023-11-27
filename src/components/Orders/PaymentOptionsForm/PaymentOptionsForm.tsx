import { useFormContext, Controller } from "react-hook-form";
import * as styles from "./PaymentOptionsForm.styles";
import { PAYMENT_OPTIONS } from "./PaymentOptionsForm.constant";

const PaymentOptionsForm = () => {
  const { control, watch } = useFormContext();

  const defaultValue = PAYMENT_OPTIONS[0].value;
  const SELECT_OPTION = watch("paymentOptions", defaultValue);

  return (
    <styles.Container>
      <Controller
        name="paymentOptions"
        control={control}
        defaultValue={defaultValue}
        rules={{ required: true }}
        render={({ field: { onChange, value, ...restField } }) => (
          <styles.StyledRadioGroup
            {...restField}
            value={value}
            onChange={onChange}
          >
            {PAYMENT_OPTIONS.map((option) => (
              <styles.StyledItem
                key={option.value}
                isChecked={SELECT_OPTION === option.value}
              >
                <styles.Label>
                  {option.icon && (
                    <styles.Icon src={option.icon} alt={option.label} />
                  )}
                  <styles.Text>{option.label}</styles.Text>
                </styles.Label>
                <styles.StyledRadio
                  value={option.value}
                  size="lg"
                ></styles.StyledRadio>
              </styles.StyledItem>
            ))}
          </styles.StyledRadioGroup>
        )}
      />
    </styles.Container>
  );
};

export default PaymentOptionsForm;
