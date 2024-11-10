"use client"

// import CourseFiltre from '@/components/course-filtre';
import CourseAffichage from '@/components/course-affichage';
import isAuth from '@/components/isAuth';
import { getFiltreCourse } from '@/lib/artaxi';


function Home() {
  console.log("HOME");
  // const [iconFiltreColor, setIconFiltreColor] = useState("bg-green-300");
  // const [isVisibleFiltre, setIsVisibleFiltre] = useState(false);
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const paraFiltre: string | null = searchParams.get('filtre');

  // const toggleFiltre = () => {
  //   setIsVisibleFiltre(!isVisibleFiltre);
  // }
 

  return (
    <>
      <CourseAffichage filtreCourse={getFiltreCourse()} />
    </>

  );
}

// export default isAuth(Home);
export default Home;
