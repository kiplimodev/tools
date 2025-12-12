"use client";

import { SubmitButton } from "@/components/forms/SubmitButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { InputFieldDefinition } from "@/lib/form-utils";
import { buildZodSchema } from "@/lib/zod-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FieldRenderer } from "./FieldRenderer";

interface AutoFormProps {
  fields: InputFieldDefinition[];
  defaultValues: Record<string, unknown>;
  onSubmit: (values: Record<string, any>) => Promise<any> | any;
}

export function AutoForm({ fields, defaultValues, onSubmit }: AutoFormProps) {
  const schema = useMemo(() => buildZodSchema(fields), [fields]);
  const methods = useForm({ resolver: zodResolver(schema), defaultValues });
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submitHandler = async (values: Record<string, unknown>) => {
    setErrorMessage(null);
    try {
      await onSubmit(schema.parse(values));
    } catch (error: any) {
      setErrorMessage(error?.message ?? "Unable to submit form.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
          </CardHeader>
          <CardContent>
            {fields.map((field) => (
              <FieldRenderer key={field.name} field={field} register={register} errors={errors} />
            ))}
            {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : null}
            <div className="pt-2">
              <SubmitButton loading={isSubmitting} />
            </div>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
}
