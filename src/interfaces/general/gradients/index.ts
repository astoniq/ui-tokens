export type GradientPoints = string;

export interface Gradients {
	/**
	 * @desc Параметры градиента черного цвета
	 * @tags gradient
	 * @deprecated используйте gradient или gradientTint
	 */
	gradientBlack: GradientPoints;

	/**
	 * @desc Параметры градиента белого цвета
	 * @tags gradient
	 * @deprecated используйте gradient или gradientTint
	 */
	gradientWhite: GradientPoints;

	/**
	 * @desc Параметры градиента нейтрального цвета
	 * @tags gradient
	 */
	gradientTint: GradientPoints;
	/**
	 * @desc Параметры градиента дефолтного цвета
	 * @tags gradient
	 */
	gradient: GradientPoints;
}
