import { useForm } from 'react-hook-form'
import FormField from './FormField'
import MediaTypeInput from './FormInput/MediaTypeInput'

const SearchForm = () => {
    const { handleSubmit, control } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    name="mediaType"
                    label="Media Type"
                    control={control}
                    Component={MediaTypeInput}
                />

                <input type="submit" />
            </form>
        </div>
    )
}

export default SearchForm
