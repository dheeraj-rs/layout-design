import Playground from '@/components/react-live/Playground';

export default function Home() {
  return (
    <Playground
      code={`
 <div className="w-100 h-52 p-8 bg-slate-600" style={{borderRadius:'10px'}}>
        <p className="text-6xl text-green-600">Hai</p>
</div>
        `}
    />
  );
}
