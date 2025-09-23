import {
    AgentsView,
    AgentsViewError,
    AgentsViewLoading}
    from "@/modules/agents/ui/views/agents-view"
import { getQueryClient, trpc } from "@/trpc/server";
import {HydrationBoundary, dehydrate} from "@tanstack/react-query";
import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {AgentsListHeader} from "@/modules/agents/ui/components/agents-list-header";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

const Page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if(!session) {
        redirect('/sign-in')
    }
  const querryClient = getQueryClient();
  void querryClient.prefetchQuery(trpc.agents.getMany.queryOptions())



  return (
      <>
          <AgentsListHeader/>
      <HydrationBoundary state={dehydrate(querryClient)}>
          <Suspense fallback={<AgentsViewLoading/>}>
              <ErrorBoundary fallback={<AgentsViewError/>}>
         <AgentsView/>
              </ErrorBoundary>
          </Suspense>
      </HydrationBoundary>
      </>
  )
};

export default Page