import { Container, Row } from "react-bootstrap";
import { MainLayout } from "../Components/MainLayout";

const Skill = () => {
    const Title = (props) => {
        return (
            <h1 className='mt-4 pb-3 text-center'>{props.title}</h1>
        )
    }

    return (
        <>
            <Title title='Skills'></Title>
            <MainLayout>
                <Container>
                    <Row>
                        <div className="col-md-4 col-sm-12">
                            <div className="box mx-auto">
                                <img src="data:image/png;base64,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" alt="images" className="img-skills" />
                                <h5 className="text-center pt-2">HTML</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 ">
                            <div className="box mx-auto">
                                <img src="data:image/png;base64,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" alt="images" className="img-skills" />
                                <h5 className="text-center pt-2">CSS</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="box mx-auto">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhdFgKwWT0BD32WAPhBz04H7yjV1VMu7axw&usqp=CAU" alt="images" className="img-skills" />
                                <h5 className="text-center pt-2">JAVASCRIPT</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-4">
                            <div className="box mx-auto">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDRENDRAQDg0PEBAPDRAPDxAPDw0RFRIWGhgRFhMYHSgiGBolHRYTITUhJSkrLi4xFyMzODMsNygtLisBCgoKDg0OGhAQGysiHSUtLTUtLS4uKy0xKystLS0vListKy0tLSstKystLS0tKy0tKysrKy4rKzcrLS0tLSstLf/AABEIAMgA/AMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQcECAIFBgP/xABKEAACAgEBAwYJBwkFCQEAAAAAAQIDBBEFBiEHEjFBUWETUlRxdIGRobMWIiMyNJLRFBc1QmJyscPSM1OUosEVRGNzgoSTo8Il/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAEEBQYDAgf/xAA3EQACAQMABQkHBAIDAAAAAAAAAQIDBBEFITFRcRIyQWGBkaGx0QYUFSJSwfATM5LhNLJCU/H/2gAMAwEAAhEDEQA/ALxAAAADrtt7ShiYtuTZxjXFtR6HOT4RgvO2l6z1GLnJRist7OI0m3hHW71b10YEEpfSXzWtVUWtWvGl4se/r6k9HpVO1t88/Jk9bpVQ6q6XKmGnY2nzpets6jaedbkXTvulzp2S50n1d0V2JLRJdiMY29joqlbRTklKfS3rxwzs47X4FxRtYU1r1smc3J6ybk+tybb9rOIBaEkEggYgAQIAABiBAIAQJBAAACQEDiAAgAQAgZmHtXIpa8BfdU10cy2cV7E9GYZImk9TE0ntLH3W5TJqSq2l8+D+ar4R+fDvnFcJLvST7mWjRdGcI2VyU4TSlCUWpRlFrVNNdKNZiyOSfeSSn/s26WsJKU8fX9SSerrXc1rJd6faZvS+iIKm69FYa2roa3rc1t1asbsa4dxbrDnHtLXABliAAAAAAAAK75YMxxx8ehdFtk7Jd6rjok/XYn6ixCseWdccN+kfyiz0NFO9hnr8Itki0Wa0fzoZWhABui6BJAGhAAgQAADEADiAAkEAIAABAgABMAAABAJAQIJIAQMnZWY6Mmq+OutNtdnDr5sk2vWtV6zFC6RqKl8r2PUGM6jaAHCtaRS7EjmfMCkQAAAAAAArLlnfDD/7n+UWaVZyyz+lxY9kLH7ZR/AttCf5sOEv9WSbT95dvkyuACTblwCAAAgADEATVXKcowgnKc5KEIrplKT0SXraO7+Ru0vJLvYvxOc61OHPklxaXmeZTjHa8HRA7z5HbT8ju9i/EfI7afkl3sX4nj3qh9cf5R9Tz+pDeu9HRA735HbT8kt9w+R20/JLvYvxD3qh/wBkf5R9RfqQ3rvXqdESd3Lc/aS/3O/1RT/gzr8zZGVStb8e6mK6ZTpshH7zWh7jWpy1Rknwaf3BVIvY13owgQSdD0CAAECQQAgAQAAjrJHWeoc5cQRs9F8NTkY+DPnU1y8auEvbFGQfLykAAAAAAAFP8r1mu0Ko9Ucev1OVljfuUS4Ch+UHK8JtXIkn82E1Uu7wcVFr7ykXmgIZuXLdF+LSJdlHNXO5P0PPEAGxLYEADQgAAAzt3/t2L6RR8WJsaa47v/b8X0mj4sTY0yntFz6fB+ZWXvPXAkgk8BtDlOx6b7aJY98pU2WVNqVaUnCTi2tX0cCjoW1Wu2qcc4IkYSlsR78jUrv87GL5Nf8Aeq/Ej87GL5Nf96r8ST8Ku/o8Ue/0Kn0lh6kanhMflTwJaKyvJr1/W5tc4rz82WvuPV7K2xj5dfhMW6FsVpzua9JQb6pRfGL86ONa0r0ddSDSPMqco85YOq29uXg5SbdSotfRbSo1y17ZL6svWte9FS70br5GBYlbpOqbfgroJqE+5r9WXd7NS/TC2vs2rKx541651di0fjRfVOL6pJ8UTLHStW2klNuUN27h6bHx1rrSryhq2r82GuZJk7XwJ42Tbi2fWpm4N9Ul0qa7mmn6zFNvGSksrYWecrIAIGAAAACF0rzknEaYsmxe613P2diS6W8WjnedVpP3pnbnkeS7K8JsmqOusqZ2Uy86k5JfdlE9cfObyHIuKkX0SfmU848mTXWAARjyAAAGPmZMaqrLpvSFUJWTfZGKbf8AA1yy75WW2Wz+vZOU5/vOTb97Lc5U9sqnDWNF/S5MtHp0xqi9ZP1vmx79X2FPGu9n7dwoyqv/AJPVwX957izsYYi5bwQAX5NAAGAIIJADO3f+3YvpNHxYmxrZrlu/9vxfSaPixNi2zK+0XPp8H5lXe89cBqa6bzL/APRy/Ssj40jYs123m/SOX6VkfGmL2eXz1OC8ws+e+B1mg0JBqsFiceaZeydp3Yl8cjHlzLIfdnHri11p9n+pjHGR5nBNYetHlpPUzY7ZWfHJxqsmHCF1cbEn0x1XGL709V6jK1PM8mya2Pjc7/jNa+K7rND0up89uKSp1pwWxNruZUSXJk0VFyv4ihnVXLh4aiKl3yrk1r92UF6jwx77lkvTysapfWhTKcu5Sm0vhs8AbXRTbtKed33ePDBZUP20AAWB1ABACIAACLQ5GNofaMNvxciteyE/5RaRrrujtj8iz6sl6+DUuZdprxrlwlw69E+dp2xRsPCSkk0001qmuKafWmYzT1vyLj9TokvFan9n2ldcxxPO85gApCODC2ptCrGplffJQqgtW30t9UUutvoSPH7S5T8SCaortun1OSVVb9b1l/lK53g3jys2zn5E/mx+pVBONdfmXW+96v8AgXVpoSvVknVXIj17eCXrj7EulaTk/m1I4bzbanm5c8ifBP5tUddfB1Jvmx97b72zqwQbGEIwioxWElhFqkorC2AAHsAQCAECQAAzt3/t2L6TR8WJsUzXTd/7di+k0fFibFNmV9oefT4PzKy8564DU143m/SOX6VkfGkbDFe7R5MoXX25EsucXdbZa4qiLUefNy0153HpI2h7ulbzm6rxlLob8jxbVIwk3LcVSC0PzUVeWWf4eP8AUFyU1deZZp3UwX/0X/xmz+vwl6Ez3mlv8Crjs939h3Zt8aKI8ODsm1rCmHjyf8F1lnYXJngQetkr7/2ZThCD+4k/eeswMGnHrVWPXCmtcVGuKite19r73xIdzp6ko4oJt72sJfd43YXacp3ax8u0nAxIUU149a0rqhGuGvTzYrRa959L7o1wlZZJQrhFznKT0jGKWrbfZoY209p4+LX4XKthTDqc3o5d0Y9Mn3JNlSb8b7zzdcbGUqsNNNt8LMhp8HJfqxT4qPrfYqKzsat3PVs6Zfm1/mwi06Tm9Ww6Pefa7zc63J4qE5c2qL6Y1x4RXc9Fq+9s6w4o5G6pwjTgox2LUuws0klhAAg9jBAACAAAQLa5Lt7I2Vx2fkSStrWmLJv+0rSX0f70ertXmZUpMJNNNNppppp6NNdDT6mRb20hdUnTl2Pc9/rvXec6lNTWGbQgp3dzlQuqiqs6t5MFwVsGlcl+0nwn5+D7dT11PKbsxxTcroPxZUybX3dV7zG1tEXdKWORylvWv++8gSoTT2FMgt3aXJfiTTdFltM+pSatrXqekv8AMVxvBu5lYM+ZfD5svqWwblXPzPqfc9H/ABNba6Rt7l8mnLXuep+j7Gy1p3FOpqT17jqAATzsADiAAkEAIEkEgIzd3/t2L6TR8WJsRI133f8At2L6TR8WJsO2Zb2h59Pg/MrbznrgARqURvBt3NhnZUIZmTCMcnIjGMcm6MYxVskkkpcEkVljYyupNReMHGnTdR4Re5Br38otoeW5f+Kv/qI+UW0PLcv/ABN/9RZfAJ/Wu47e6T3rx9DYXUamv1O9O0YvWOZk/wDXdZYvZJtHf7J5TM2ppZUK8qHW+b4KzTulFc32x9ZyqaDuIrMWn1a0/FY8Ty7aa3Fj7V3WwMnV349bnLi5w+isb7XKGmvr1PA7ycmtlUXbgTlfBcXTPTwyX7Mlop+bRPs1LE2HtujNoV+NLWOuk4yWllUvFkup+59TOx1IlC+urWfJy9W2Mta/rsweI1JwZrbJcdJcGno0+DT7GgWbyn7sxlB7RojpOOn5VGK/tIt6K7zrhr2p69XGsDYWd1G5pKpHtW57vzoLCnUU1lHI4gEo9AAAAAACBAJhBtpJNttJJLVtvoSXWwEQQWFu5yX3WxVudY8aD4qqCTua/ab4Q83F9uh66nky2WopOF0340rnq/u6L3FXW01aUpcnlZfVr8dnccJXEE8HtDC2ps+rJplRfFTqmtGn0p9Uk+prpTM0GGTaaaeGV6eDXjeXY08LLnjz4pfOqlpp4Spt82fuafemdWXFyq7GV2GsqK+lxpavTplVJ6SXqfNl3aPtKcN9o2796oKo+dsfFeqw/IuqFX9SGXt6SCSCSedSAAAgSDiAGfu99uxfSaPixNhpGvG7/wBuxfSaPixNhmzL+0HPp8H5lbd89cAa+bzfpHL9KyPjSNg9TXzeb9I5fpWR8aQvZ/n1OCC0574HXEEkGpwTyA0SQGAPScnG1JY+0q4a6VZDWPZHqk5v5j07VPm8exvtLtKB3Sqctp4aj0/lNEvMlYnJ+pRbL91Mpp2EVWi1ta19j1enBIr7lJTXA+eRTGyEqrFzq7IyhNeNGS0a9jZrvmYzqutplxlVZOuT7XGTi37jYsoDeh67TzGuj8qydP8AzSOugJfNUjw+47V62jrQAacmgACEACAEC2+S3dONdcdoZEdbbFrixkv7KtpfSfvS6uxedlebobH/ACzPqxnr4Ny592mvCqPGXHq1S5uvbJGxEIpJJJJJaJJaJLsSM9p69dOCoQeuW3hu7enqWOlkW5qYXJRzABkiEAAAGPmY0bap0zWsLYSrmu2Mk0/4mt+XRKu2yqf165yhP96Mmn70bMFC8oWJ4La2TFLSM5RtXf4SMZN/ecjR+ztXE6lPek+548c+BOsZfM11fnmedIJINWWIJIIAQAACM7d/7di+k0fFibCs163f+34vpFHxYmwbZl/aDnw4PzK+7564Emvu8/6Ry/Ssj40jYDU8VncnGNbdbfK++MrbLLZJeC0TnJyaWsejiRtE3lK2lJ1HtRzoVFCTb3FR6gtX81+J/f3+yr+kfmwxP7+//wBX9JefGrTe+4le9Q6yqCOno4lt18mOCn863Kl3KVMdf8h3eyt1cHFkpU48fCLirLPpZxfanLXmvzaHOrpy2ivlTk+7xfoxO6h0JnluTXdWdUvy/Kg4y5rji1yWk0pLR2yXVqtUl2NvsLEAMzdXM7io6k//ABbiFObk8s+GZlwppsvs4V1QlZP92Kba8/A13utlOyVk+MpTlOffKT1fvZYnKhvPFp7Nx5a/OTy5Lo1i9VRr2p6N9miXaiuEaTQlrKlSdSSw5eS2d+3hgl28cLL6SQAXZIABACABAAWjyLbO+0ZjXiY9b7eic/5RaZ5DktxPB7IqlppK6Vl0vO5OKf3YxPXmB0rV/UvKj3PH8dRWVXmbAAK85gAAAKd5YK9NoVy6p40PW42WJ+5xLiKq5Z4fS4su2Fi9ko/iW+gpYvIrepeWfsSLT91dvkyuCCQbctjiAAEACAEZ+7/2/F9Jo+LE2Cka4V2SjKM4NxnCSlCS6Yyi9U160du98Np+V2+1fgU+k9HzupRcWljO3PoRa9GU2mi9yCiPlhtPyy72x/AfLDafll3tj+BV/Aq31R8fQ4+6z6i9tSCivlhtPyu72r8CPlhtPyu32r8B/Aq/1R8fQPdpb0XsSkUQ979p+WXeqSX+hiZO3s2zWNuXkTT6VLIt5v3ddBx0DV6Zrx/oPdpb0XltTbeJjLXKvrqfiOWtj81a1k/YV3vRyj2WRlRs+MqIPVSvlwukv2EvqefXX908Bze1kpFjbaGo0nypfM+vGO71b4HWFvGOt6x3skAuTuAAAiAAAAjXivOAeo7UBsdurTzNm4kOhrFo537zrTfvbO2MfAhzaa4+LXCPsijIPmVSfLnKW9sqAADwAAAACsOWpfYn35H8os8q/lpfHDX/AD/5Ra6E/wA6HCX+kjvbfux7fJlZnEA3RbAAgQgASAAgABAgAYAAgBAgAQgAAEAAAAgABAgEAACAR6hzlxA2jiuCXccjhW9Yp9qRzPl5TrYAAAwAAAFdcseI5Y2Peuiq2dcu5WRTTfrrS9ZYp123dmQy8W3Fs4Rsi0pdLhJcYzXmaT9RLsbhW9xCo9ievg9T8GdKU+RNSNcgZO08C3HvnRdHmWVy5sl1d0l2prRp9jMY+hRaksrYXGQQCRgACAECAAAAABA4gAIAAAAAAQIAAQAIAAQCRiBlbJw3kZNOPHXW22uvh1azSb9S1fqMQsvkj3bk5/7TujpCKlDF1/Xk+DsXclrFd7fYRby5VtQlVfRs49H5uy+g8VJ8mOS2gAfOisAAAAAAAAAAPNb2bp0bQgnP6LIgtKropapeLJfrR16urqa1etT7Y3Kz8aTUqZW19VlEZXQ07WkudH1pAFxovSValONHU4vofR06tf8AR3p1501ha0efnBxekk4vrUk016mQAbWLysloQABgQAAECAAAgAAIAABAAAIgAABBAACJMvC2Tk3NeAouub8Sqcl7UtEAc603CDkjnVm4Ryj3+6fJhNyjdtLSEFx8BCXz5d05LhFdybfei1KKYwhGuuKhCCUYRilGMYpaJJLoQB8+u76tdyUqj4JbFn82vL69hAqVJTes+wAIx4AAAD//2Q==" alt="images" className="img-skills" />
                                <h5 className="text-center pt-2">BOOTSTRAP</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-4 ">
                            <div className="box mx-auto">
                                <img src="data:image/png;base64,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" alt="images" className="img-skills" />
                                <h5 className="text-center pt-2">FIGMA</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-4">
                            <div className="box mx-auto">
                                <img src="data:image/png;base64,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" alt="images" className="img-skills" />
                                <h5 className="text-center pt-2">REACT</h5>
                            </div>
                        </div>
                    </Row>
                </Container>
            </MainLayout>
        </>
    )
}

export default Skill;