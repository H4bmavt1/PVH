import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { closeFormProduct } from '../../actions/adminAction';
import styles from './AddProduct.module.css'
import Input from '../Input/Input';
import { createProduct } from '../../actions/productListAction';

const AddProduct = () => {
    const {errors, loading} = useSelector(state => state.productList);
    const {items} = useSelector(state => state.nav);
    const outline = useRef(null);
    const dispatch = useDispatch();

    const manufacturers = items.find((item) => {
        return item.title === 'Manufacturers';
    }).links;

    const classesItems = items.find((item) => {
        return item.title === 'Classes';
    }).links;
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [cpuName, setCpuName] = useState('');
    const [gpuName, setGpuName] = useState('');
    const [cpuCores, setCpuCores] = useState(0);
    const [cpuThreads, setCpuThreads] = useState(0);
    const [cpuCache, setCpuCache] = useState(0);
    const [cpuBaseFreq, setCpuBaseFreq] = useState(0);
    const [cpuMaxFreq, setCpuMaxFreq] = useState(0);
    const [ramSize, setRamSize] = useState(0);
    const [ramType, setRamType] = useState('');
    const [romSize, setRomSize] = useState(0);
    const [romType, setRomType] = useState('');
    const [ramBusSpeed, setRamBusSpeed] = useState(0);
    const [ramMaxSp, setRamMaxSp] = useState(0);
    const [battery, setBattery] = useState(0);
    const [sizeWidth, setSizeWidth] = useState(0);
    const [sizeLength, setSizeLength] = useState(0);
    const [sizeThickness, setSizeThickness] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [sale, setSale] = useState(0);
    const [screenSize, setScreenSize] = useState(0);
    const [screenSizeX, setScreenSizeX] = useState(0);
    const [screenSizeY, setScreenSizeY] = useState(0);
    const [screenFreq, setScreenFreq] = useState(0);
    const [imgs, setImgs] = useState(null);
    const [manufacturer, setManufacturer] = useState(manufacturers[0]._id);
    const [classes, setClasses] = useState(classesItems[0]._id);
    
    const handleClickOutline = (e) => {
        if(e.target === outline.current) {
            dispatch(closeFormProduct());
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('cpuName', cpuName);
        formData.append('cpuCores', cpuCores);
        formData.append('cpuThreads', cpuThreads);
        formData.append('cpuCache', cpuCache);
        formData.append('cpuBaseFreq', cpuBaseFreq);
        formData.append('cpuMaxFreq', cpuMaxFreq);
        formData.append('gpuName', gpuName);
        formData.append('ramSize', ramSize);
        formData.append('ramBusSpeed', ramBusSpeed);
        formData.append('ramMaxSp', ramMaxSp);
        formData.append('ramType', ramType);
        formData.append('battery', battery);
        formData.append('sizeWidth', sizeWidth);
        formData.append('sizeLength', sizeLength);
        formData.append('sizeThickness', ramMaxSp);
        formData.append('romSize', romSize);
        formData.append('romType', romType);
        formData.append('quantity', quantity);
        formData.append('sale', sale);
        formData.append('screenSize', screenSize);
        formData.append('screenSizeX', screenSizeX);
        formData.append('screenSizeY', screenSizeY);
        formData.append('screenFreq', screenFreq);
        console.log(imgs);
        for(let i = 0; i < imgs.length; i++) {
            formData.append('imgs', imgs[i]);
        }
        // formData.append('imgs', imgs);
        formData.append('manufacturer', manufacturer);
        formData.append('classes', classes);
        dispatch(createProduct(formData));
    }

    const handleUpLoadImgs = (e) => {
        setImgs(e.target.files);
    }

    return (
        <div className={styles.bgc} ref={outline} onClick={handleClickOutline}>
            <div className={styles.container}>
                <button onClick={() => dispatch(closeFormProduct())} className={styles.close}><i className="fas fa-times"></i></button>
                <h2 className={styles.title} >Add Product</h2>
                <form action="" noValidate className={styles.form} onSubmit={handleSubmit}>
                    <Input title='Name' name='name' id='product-name' type='text' value={name} onChangeInput={(e) => setName(e.target.value)} ></Input>
                    <Input title='Price' name='price' id='product-price' type='number' value={price} onChangeInput={(e) => setPrice(e.target.value)} ></Input>
                    <Input title='CPU Name' name='cpuName' id='product-cpuName' type='text' value={cpuName} onChangeInput={(e) => setCpuName(e.target.value)} ></Input>
                    <Input title='CPU Cores' name='cpuCores' id='product-cpuCores' type='number' value={cpuCores} onChangeInput={(e) => setCpuCores(e.target.value)} ></Input>
                    <Input title='CPU Threads' name='cpuThreads' id='product-cpuThreads' type='number' value={cpuThreads} onChangeInput={(e) => setCpuThreads(e.target.value)} ></Input>
                    <Input title='CPU BaseFreq' name='cpuBaseFreq' id='product-cpuBaseFreq' type='number' value={cpuBaseFreq} onChangeInput={(e) => setCpuBaseFreq(e.target.value)} ></Input>
                    <Input title='CPU MaxFreq' name='cpuMaxFreq' id='product-cpuMaxFreq' type='number' value={cpuCache} onChangeInput={(e) => setCpuCache(e.target.value)} ></Input>
                    <Input title='CPU Cache' name='cpuCache' id='product-cpuCache' type='number' value={cpuMaxFreq} onChangeInput={(e) => setCpuMaxFreq(e.target.value)} ></Input>
                    <Input title='GPU' name='gpu' id='product-gpu' type='text' value={gpuName} onChangeInput={(e) => setGpuName(e.target.value)} ></Input>
                    <Input title='RAM size' name='ramSize' id='product-ramSize' type='number' value={ramSize} onChangeInput={(e) => setRamSize(e.target.value)} ></Input>
                    <Input title='RAM type' name='ramType' id='product-ramType' type='text' value={ramType} onChangeInput={(e) => setRamType(e.target.value)} ></Input>
                    <Input title='RAM bus speed' name='ramBusSpeed' id='product-ramBusSpeed' type='number' value={ramBusSpeed} onChangeInput={(e) => setRamBusSpeed(e.target.value)} ></Input>
                    <Input title='RAM max support' name='ramMaxSp' id='product-ramMaxSp' type='number' value={ramMaxSp} onChangeInput={(e) => setRamMaxSp(e.target.value)} ></Input>
                    <Input title='Battery' name='battery' id='product-battery' type='number' value={battery} onChangeInput={(e) => setBattery(e.target.value)} ></Input>
                    <Input title='Size Width' name='sizeWidth' id='product-sizeWidth' type='number' value={sizeWidth} onChangeInput={(e) => setSizeWidth(e.target.value)} ></Input>
                    <Input title='Size Length' name='sizeLength' id='product-sizeLength' type='number' value={sizeLength} onChangeInput={(e) => setSizeLength(e.target.value)} ></Input>
                    <Input title='Size Thickness' name='sizeThickness' id='product-sizeThickness' type='number' value={sizeThickness} onChangeInput={(e) => setSizeThickness(e.target.value)} ></Input>
                    <Input title='Rom size' name='RomSize' id='product-romSize' type='number' value={romSize} onChangeInput={(e) => setRomSize(e.target.value)} ></Input>
                    <Input title='Rom type' name='RomType' id='product-romType' type='text' value={romType} onChangeInput={(e) => setRomType(e.target.value)} ></Input>
                    <Input title='Quantity' name='quantity' id='product-quantity' type='number' value={quantity} onChangeInput={(e) => setQuantity(e.target.value)} ></Input>
                    <Input title='Sale' name='sale' id='product-sale' type='number' value={sale} onChangeInput={(e) => setSale(e.target.value)} ></Input>
                    <Input title='Screen size' name='screenSize' id='product-screenSize' type='number' value={screenSize} onChangeInput={(e) => setScreenSize(e.target.value)} ></Input>
                    <Input title='Screen size X' name='screenSizeX' id='product-screenSizeX' type='number' value={screenSizeX} onChangeInput={(e) => setScreenSizeX(e.target.value)} ></Input>
                    <Input title='Screen size Y' name='screenSizeY' id='product-screenSizeY' type='number' value={screenSizeY} onChangeInput={(e) => setScreenSizeY(e.target.value)} ></Input>
                    <Input title='Screen freq' name='screenFreq' id='product-screenFreq' type='number' value={screenFreq} onChangeInput={(e) => setScreenFreq(e.target.value)} ></Input>
                    <div className={styles.formControl}>
                        <label className={styles.label} htmlFor="product-images">Images</label>
                        <input className={styles.input} type="file" name="images" id="product-images" multiple accept="image/*" onChange={handleUpLoadImgs} />
                    </div>
                    <div className={styles.formControl}>
                        <label className={styles.label} htmlFor="product-manufacturer">Manufacture</label>
                        <select className={styles.input} name="manufacturer" id="product-manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)}>
                            {manufacturers.map((item) => {
                                return <option key={item._id} value={item._id}>{item.name}</option>
                            })}
                        </select>
                    </div>
                    <div className={styles.formControl}>
                        <label className={styles.label} htmlFor="product-classes">Class</label>
                        <select className={styles.input} name="classes" id="product-classes" value={classes} onChange={(e) => setClasses(e.target.value)}>
                        {classesItems.map((item) => {
                            return <option key={item._id} value={item._id}>{item.name}</option>
                        })}
                    </select>
                    </div>
                    
                    {(loading || errors) ? <button onClick={(e) => e.preventDefault()} className={styles.loading}>Loading...</button> : <button type='submit' className={styles.submit}>Submit</button>} 
                </form>
            </div>
        </div>
    )
}

export default AddProduct
