@extends('layout')
 
@section('content')
 
    @if($errors->count())
 
        @foreach($errors->all() as $error)
            <div class="alert-danger">{{ $error }}</div>
        @endforeach
 
    @endif
 
    <form action="{{ route('register') }}" method="post">
        @csrf
 
        <div class="form-group">
            <label for="">First Name</label><br>
            <input class="form-control" type="text" name="first_name" value="{{ old('first name') }}">
        </div>

        <div class="form-group">
            <label for="">Last Name</label><br>
            <input class="form-control" type="text" name="last_name" value="{{ old('last name') }}">
        </div>

        <div class="form-group">
            <label for="">User Name</label><br>
            <input class="form-control" type="text" name="user_name" value="{{ old('user_name') }}">
        </div>
 
        <div class="form-group">
            <label for="">Email</label><br>
            <input class="form-control" type="email" name="email" value="{{ old('email') }}">
        </div>

        <div class="form-group">
            <label for="">Date of Birth</label><br>
            <input class="form-control" type="date" name="date_of_birth" value="{{ old('date_of_birth') }}">
        </div>

        <div class="form-check">
            <label for="">Vegan</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="1">
        </div>

        <div class="form-check">
            <label for="">Vegetarian</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="2">
        </div>
        
        <div class="form-check">
            <label for="">Pescetarian</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="3">
        </div>

        <div class="form-check">
            <label for="">Keto</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="4">
        </div>

        <div class="form-check">
            <label for="">Halal</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="5">
        </div>

        <div class="form-check">
            <label for="">Kosher</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="6">
        </div>

        <div class="form-check">
            <label for="">Gluten</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="7">
        </div>

        <div class="form-check">
            <label for="">Milk</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="8">
        </div>

        <div class="form-check">
            <label for="">Soy</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="9">
        </div>

        <div class="form-check">
            <label for="">Eggs</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="10">
        </div>

        <div class="form-check">
            <label for="">Peanuts</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="11">
        </div>

        <div class="form-check">
            <label for="">Tree Nuts</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="12">
        </div>

        <div class="form-check">
            <label for="">Fish</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="13">
        </div>

        <div class="form-check">
            <label for="">Molluscs</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="14">
        </div>

        <div class="form-check">
            <label for="">Crustaceans</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="15">
        </div>

        <div class="form-check">
            <label for="">Mustard</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="16">
        </div>

        <div class="form-check">
            <label for="">Sesame</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="17">
        </div>

        <div class="form-check">
            <label for="">Celery</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="18">
        </div>

        <div class="form-check">
            <label for="">Lupin</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="19">
        </div>

        <div class="form-check">
            <label for="">Sulphites</label>
            <input class="form-check-input" type="checkbox" name="diet[]" value="20">
        </div>
 
        <div class="form-group">
            <label for="">Password</label><br>
            <input class="form-control" type="password" name="password" value="">
        </div>
 
        <div class="form-group">
            <label for="">Confirm password</label><br>
            <input class="form-control" type="password" name="password_confirmation" value="">
        </div>
 
        <button type="submit" class="btn btn-primary">Sign up</button>
 
    </form>
 
@endsection