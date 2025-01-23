# Rent - Office Front End  

---

### 🚀 Project Steps  
**1. Install React Typescript**

Run the following command to install React Ts:  
```bash  
npm create vite@latest
```
##

**2. Set Up React Router Dom**

Run the following command to install React Router Dom:  
```bash  
npm install react-router-dom
```

Implement React Router on `App.tsx`
```bash
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="..." element={...} />
      </Routes>
    </BrowserRouter>
  );
}
```

##

**3. Set Up Swiper Slide Carousel**

Run the following command to install Swiper:  
```bash
npm install swiper
```

Implement Swiper
```bash
# import this only on main.tsx
import "swiper/swiper-bundle.css";
# reusable components
function ...() {
  return (
    <Swiper>
      <SwiperSlide className="...">
        ...
      </SwiperSlide>
    </Swiper>
  );
}
```

##

**4. Set Up Component and Wrapper**

Separate the code in `Browse.tsx` into multiple `components` and `wrappers`

##

**5. Set Axios For Access Endpoint API**

Run the following command to install Axios:  
```bash
npm install axios
```
Implement axios on project
```bash
# Use `useState` for get data from backend
const [..., set...] = useState<...[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

# use `useEffect` for set data from backend
useEffect(() => {
  axios
    # Get from API Endpoint
    .get("...", {
      headers: {
        "X-API-KEY": "...",
      },
    })
    .then((response) => {
      setCities(response.data.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);
```

Create `interface` on folder `types` for implement OOP
```bash
export interface .. {
  id: number;
  name: string;
  ...
}
```

##

**6. Set Zod For Validation Form**

Run the following command to install zod:  
```bash
npm install zod
```