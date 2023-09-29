package com.myproject;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

public class CalenderModule extends ReactContextBaseJavaModule{
    CalenderModule(ReactApplicationContext context){
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalenderModule";
    }

   @ReactMethod
   public void createCalenderEvent(String name,String location){
       Log.d("CalenderModule","Create event called with name:"+name
               +"and location:"+location);
   }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "New Event");
        return constants;
}

//    @ReactMethod
//    public void createCalenderEvent(String name, String location, Callback callBack) {
//        Integer eventId = 2;
//        callBack.invoke(null,eventId);
//    }

    @ReactMethod
    public void createCalenderEventWithPromise(String name,String location,Promise promise) {
        try {
            Integer eventId = 3;
            String result="name = "+name+" Location = "+location+" Id = "+eventId;
            promise.resolve(result);
            
        } catch (Exception e) {
            promise.reject("Create Event Error", e);
        }



        
    }






}
