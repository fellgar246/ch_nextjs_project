import EditForm from '@/components/admin/EditForm';

interface ParamsProps {
    params: {
      slug: string;
    };
  }

const EditPage = ({ params }: ParamsProps) => {
    const { slug } = params;
    
  return (
    <div>
        <EditForm slug={slug} />
    </div>
  )
}

export default EditPage