import { Controller, SubmitHandler, useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import styles from "./form.module.scss";

import "react-phone-number-input/style.css";

interface IFormInput {
	firstName: string;
	phoneInput: string;
	mail: string;
	pieceOfLand: string;
}

function ContactsForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		control,
	} = useForm<IFormInput>({
		mode: "onBlur",
		defaultValues: {
			pieceOfLand: "yes",
		},
	});
	const onSubmit: SubmitHandler<IFormInput> = (data) =>
		console.log(JSON.stringify(data));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.formText}>
				<label
					htmlFor="name"
					className={errors["firstName"] && styles.labelError}
				>
					Ваше имя
				</label>
				<input
					id="name"
					type="text"
					{...register("firstName", {
						required: true,
						pattern: /^[а-яА-Я]+$/,
						maxLength: 20,
					})}
					className={errors["firstName"] && styles.inputError}
				/>
			</div>
			<div className={styles.formText}>
				<label
					htmlFor="phone-input"
					className={errors["phoneInput"] && styles.labelError}
				>
					Телефон
				</label>
				<Controller
					name="phoneInput"
					control={control}
					rules={{
						required: true,
						validate: (value) => isValidPhoneNumber(value),
					}}
					render={({ field: { onChange, value } }) => (
						<PhoneInput
							value={value}
							rules={{ required: true }}
							onChange={onChange}
							defaultCountry="RU"
							id="phone-input"
							className={errors["phoneInput"] && styles.inputErrorPhone}
						/>
					)}
				/>
			</div>
			<div className={styles.formText}>
				<label className={errors["mail"] && styles.labelError} htmlFor="email">
					E-mail
				</label>
				<input
					className={errors["mail"] && styles.inputError}
					id="email"
					type="email"
					{...register("mail", { required: true, pattern: /^\S+@\S+$/i })}
				/>
			</div>
			<div className={styles.formRadio}>
				<legend>С участком</legend>
				<input type="radio" id="yes" value="yes" {...register("pieceOfLand")} />
				<label htmlFor="yes">да</label>
				<input type="radio" id="no" value="no" {...register("pieceOfLand")} />
				<label htmlFor="no">нет</label>
			</div>
			<div className={styles.formTextarea}>
				<label htmlFor="message">Сообщение</label>
				<textarea id="message"></textarea>
			</div>
			<div>
				<input
					className={styles.button}
					type="submit"
					value="Отправить"
					disabled={!isValid}
				/>
			</div>
		</form>
	);
}

export default ContactsForm;
