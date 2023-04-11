import { useAppContext } from "@/components/business/AppContext"
import FormField from "@/components/generic/FormField"
import Button from "@/components/generic/Button"
import Form from "@/components/generic/Form"
import { useCallback } from "react"
import * as yup from "yup"

const initialValues = {
  title: "",
  content: "",
  date: "",
}

const validationSchema = yup.object().shape({
  title: yup.string().required("Le titre est obligatoire").label("Titre"),
  content: yup.string().required("Le contenu est obligatoire").label("Contenu"),
  date: yup
    .date()
    .min(new Date(), "La date ne peut pas être dans le passé")
    .required("La date est obligatoire")
    .label("Date"),
})

const CreateCard = () => {
  const {
    actions: { addTodo },
  } = useAppContext()

  const handleSubmit = useCallback(
    async (values, { resetForm }) => {
      await addTodo(values)
      resetForm()
    },
    [addTodo]
  )

  return (
    <div className="flex basis-1/3 flex-col gap-y-4 rounded-lg bg-white p-6 shadow-md">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className="flex h-full justify-between"
      >
        <div className="flex flex-col gap-y-4">
          <FormField name="title" label="Titre" />
          <FormField name="content" type="text-area" label="Contenu" />
          <FormField name="date" type="date" label="Date" />
        </div>
        <Button className="mt-4" type="submit" color="primary">
          Ajouter
        </Button>
      </Form>
    </div>
  )
}

export default CreateCard
