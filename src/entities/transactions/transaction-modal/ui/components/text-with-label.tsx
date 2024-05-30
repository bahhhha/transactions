export const TextWithLabel = ({
  label,
  text,
  labelClassNames,
  textClassNames,
}: {
  label: string;
  text: string;
  labelClassNames?: string;
  textClassNames?: string;
}): JSX.Element => {
  return (
    <div className="flex gap-2">
      <p className={`text-gray-500 font-semibold ${labelClassNames}`}>
        {label}
      </p>
      <p className={`italic ${textClassNames}`}>{text}</p>
    </div>
  );
};
