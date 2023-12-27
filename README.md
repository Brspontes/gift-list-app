# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Architectural solution

The application consists of a

- frontend
- backend
- lambda
- mongodb

<center>
<img src="https://github.com/Brspontes/gift-list-app/assets/14333695/519ace4e-9c5e-4ac9-baed-efb164951120" height="800"/>
</center>

## Run Application

### Running Backend

To run the application, the back end must be running

The backend was developed in Dotnet 7, and must be run via visual studio or the command line.

```bash
dotnet run --project ./projects/proj1/proj1.csproj
```

### Running Serverless

The serverless application is not a mandatory requirement, and the implementation line in the backend code can be commented on.

```c#
await sendEmailEventHandler.SendEmail(new SendEmailEvent(userSelectGiftItemDto.Email, item.Images, item.ItemDescription));
```

<br />
If you want to use sending email, run the command below in the <a href="https://github.com/Brspontes/lambda-send-email">project directory</a>

```bash
npm run start:offline
```

**_NOTE:_** Remember, there may be costs regarding sending emails.
<br />

### Running Frontend

With the entire context running, we only need to run the command below:

```bash
npm run dev
```

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/14333695/293073607-b9fa63cc-defc-4a13-9016-72eef014ef57.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231227T172334Z&X-Amz-Expires=300&X-Amz-Signature=91927c5654e256210706711f63cc1037def1f1f8148bdbefcc7f75a376625bf5&X-Amz-SignedHeaders=host&actor_id=14333695&key_id=0&repo_id=736022642" />
